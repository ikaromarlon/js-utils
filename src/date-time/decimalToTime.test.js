import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import decimalToTime from './decimalToTime.js'

describe('decimalToTime', () => {
  test.todo('should convert a decimal value to time string', () => {
    assert.equal(decimalToTime(2.5), '2:30')
    assert.equal(decimalToTime('1.75'), '1:45')
    assert.equal(decimalToTime('23.1'), '23:06')
    assert.equal(decimalToTime(15.25), '15:15')
  })
})
