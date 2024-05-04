import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isValidDate from './isValidDate.js'

describe('isValidDate', () => {
  test('should return true for valid dates', () => {
    assert.equal(isValidDate(new Date()), true)
    assert.equal(isValidDate(new Date('2020-01-01')), true)
    assert.equal(isValidDate('2020-01-01'), true)
  })

  test('should return false for invalid dates', () => {
    assert.equal(isValidDate(), false)
    assert.equal(isValidDate(null), false)
    assert.equal(isValidDate({}), false)
    assert.equal(isValidDate('01/01/2020'), false)
    assert.equal(isValidDate(new Date(NaN)), false)
    assert.equal(isValidDate(new Date('not a date')), false)
  })
})
