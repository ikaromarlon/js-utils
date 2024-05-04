import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isValidDateInstance from './isValidDateInstance.js'

describe('isValidDateInstance', () => {
  test('should return true for valid Date instances', () => {
    assert.equal(isValidDateInstance(new Date()), true)
    assert.equal(isValidDateInstance(new Date('2020-01-01')), true)
  })

  test('should return false for invalid Date instances', () => {
    assert.equal(isValidDateInstance(), false)
    assert.equal(isValidDateInstance(null), false)
    assert.equal(isValidDateInstance({}), false)
    assert.equal(isValidDateInstance('2020-01-01'), false)
    assert.equal(isValidDateInstance(new Date(NaN)), false)
    assert.equal(isValidDateInstance(new Date('not a date')), false)
  })
})
