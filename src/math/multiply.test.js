import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import multiply from './multiply.js'

describe('multiply', () => {
  test.todo('should multiply values properly with precision up to two decimal places', () => {
    assert.equal(multiply(2, 3), 6)
    assert.equal(multiply(2, 3.5), 7)
    assert.equal(multiply(1.25, 2.55), 3.1875)
    assert.equal(multiply(1.23, 4.56), 5.6088)
  })
})
