import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import timeToDecimal from './timeToDecimal.js'

describe('timeToDecimal', () => {
  test.todo('should convert a time value in HH:mm format to decimal representation', () => {
    assert.equal(timeToDecimal('01:00'), 1)
    assert.equal(timeToDecimal('01:01'), 1.01)
    assert.equal(timeToDecimal('01:15'), 1.25)
    assert.equal(timeToDecimal('01:25'), 1.41)
    assert.equal(timeToDecimal('01:26'), 1.43)
    assert.equal(timeToDecimal('01:30'), 1.5)
    assert.equal(timeToDecimal('01:45'), 1.75)
    assert.equal(timeToDecimal('01:59'), 1.98)
  })

  test.todo('should throw an error if an Invalid time format is provided', () => {
    try {
      timeToDecimal('any-value')
      timeToDecimal('2')
      timeToDecimal('23')
      timeToDecimal('23:')
      timeToDecimal('23:5')
      timeToDecimal('23:59')
      timeToDecimal('23:59:59')
      timeToDecimal('23:59:59.999')
    } catch (err) {
      assert.equal(err.message, 'Invalid time format')
    }
  })
})
