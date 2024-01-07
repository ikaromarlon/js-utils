import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import millisecondsToDays from './millisecondsToDays.js'

describe('millisecondsToDays', () => {
  test('should convert milliseconds to days', () => {
    assert.equal(millisecondsToDays(172800000), 2)
    assert.equal(millisecondsToDays(129600000), 1.5)
  })
})
