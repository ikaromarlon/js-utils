import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isHttpStatusCode from './isHttpStatusCode.js'

describe('isHttpStatusCode', () => {
  test('should return true', () => {
    assert.equal(isHttpStatusCode(100), true)
    assert.equal(isHttpStatusCode(200), true)
    assert.equal(isHttpStatusCode(201), true)
    assert.equal(isHttpStatusCode(300), true)
    assert.equal(isHttpStatusCode(302), true)
    assert.equal(isHttpStatusCode(400), true)
    assert.equal(isHttpStatusCode(404), true)
    assert.equal(isHttpStatusCode(500), true)
    assert.equal(isHttpStatusCode(502), true)
  })

  test('should return false', () => {
    assert.equal(isHttpStatusCode(700), false)
    assert.equal(isHttpStatusCode('abc'), false)
  })
})
