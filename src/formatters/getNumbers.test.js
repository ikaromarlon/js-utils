import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import getNumbers from './getNumbers.js'

describe('getNumbers', () => {
  test('should extract numeric digits from a string', () => {
    assert.equal(getNumbers('abc123xyz'), '123')
    assert.equal(getNumbers(45.67), '4567')
  })
})
