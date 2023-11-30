import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import numberFormat from './numberFormat.js'

describe('numberFormat', () => {
  test.todo('should format a number with a specified number of decimals, decimal point, and thousands separator', () => {
    assert.equal(numberFormat(1234567, 2), '1,234,567.00')
    assert.equal(numberFormat(1234567.89, 2, '.', ','), '1,234,567.89')
    assert.equal(numberFormat(1234567.89, 2, ',', '.'), '1.234.567,89')
  })
})
