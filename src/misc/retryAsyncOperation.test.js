import { describe, test, mock, beforeEach } from 'node:test'
import { strict as assert } from 'node:assert'
import retryAsyncOperation from './retryAsyncOperation.js'

const asyncFn = mock.fn(async () => {
  return 'Success'
})

function errorHandler (error) {
  const unouthorized = 401
  if (error.statusCode === unouthorized) {
    return error // do not retry
  }
  // signal retry: empty (null | undefined) return
}

beforeEach(() => mock.restoreAll())

describe('retryAsyncOperation', () => {
  test('should return the result if the operation succeeds', async () => {
    const result = await retryAsyncOperation(asyncFn)
    assert.strictEqual(result, 'Success')
  })

  describe('with no errorHandler', () => {
    test('should retry the operation if it fails', async () => {
      asyncFn.mock.mockImplementationOnce(() => { throw new Error('Failed') })

      const result = await retryAsyncOperation(asyncFn, 100, 3)
      assert.strictEqual(result, 'Success')
    })

    test('should throw an error if maxAttempts is reached', async () => {
      asyncFn.mock.mockImplementation(() => { throw new Error('Failed') })

      try {
        await retryAsyncOperation(asyncFn, 100, 2)
      } catch (error) {
        assert.strictEqual(error.message, 'maximum number of attempts reached')
        assert.strictEqual(error.cause.message, 'Failed')
      }
    })
  })

  describe('with errorHandler', () => {
    test('should retry the operation if it fails', async () => {
      asyncFn.mock.mockImplementationOnce(() => { throw new Error('Failed') })

      const result = await retryAsyncOperation(asyncFn, 100, 3, errorHandler)
      assert.strictEqual(result, 'Success')
    })

    test('should throw an error if maxAttempts is reached', async () => {
      asyncFn.mock.mockImplementation(() => { throw new Error('Failed') })

      try {
        await retryAsyncOperation(asyncFn, 100, 2, errorHandler)
      } catch (error) {
        assert.strictEqual(error.message, 'maximum number of attempts reached')
        assert.strictEqual(error.cause.message, 'Failed')
      }
    })

    test('should return the error and do not retry if errorHandler returns an error with statusCode 401', async () => {
      asyncFn.mock.mockImplementation(() => {
        const err = new Error('Unauthorized')
        err.statusCode = 401
        throw err
      })

      const result = await retryAsyncOperation(asyncFn, 100, 2, errorHandler)

      assert.strictEqual(result instanceof Error, true)
      assert.strictEqual(result.message, 'Unauthorized')
      assert.strictEqual(result.statusCode, 401)
    })
  })
})
