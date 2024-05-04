import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isValidISODateString from './isValidISODateString.js'

describe('isValidISODateString', () => {
  test('should return true for valid ISO date strings', () => {
    assert.equal(isValidISODateString('2024-05-01'), true)
    assert.equal(isValidISODateString('1999-02-29'), true)
  })

  test('should return false for invalid ISO date strings', () => {
    assert.equal(isValidISODateString('2024-05-32'), false) // Invalid day
    assert.equal(isValidISODateString('2022-13-01'), false) // Invalid month
    assert.equal(isValidISODateString('2022/04/30'), false)
    assert.equal(isValidISODateString('2024-02-'), false)
    assert.equal(isValidISODateString('22-04-30'), false)
    assert.equal(isValidISODateString(''), false)
    assert.equal(isValidISODateString('notadate'), false)
  })

  test('should return false for non-string inputs', () => {
    assert.equal(isValidISODateString(), false)
    assert.equal(isValidISODateString(null), false)
    assert.equal(isValidISODateString({}), false)
    assert.equal(isValidISODateString(123), false)
    assert.equal(isValidISODateString(new Date()), false)
  })
})
