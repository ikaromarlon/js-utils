import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import millisecondsToDays from './millisecondsToDays.js'

describe('millisecondsToDays', () => {
  test.todo('should convert days to milliseconds', () => {
    assert.equal(millisecondsToDays(172800000), 2)
    assert.equal(millisecondsToDays(129600000), 1.5)
  })
})
