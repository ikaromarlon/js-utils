import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import daysToMilliseconds from './daysToMilliseconds.js'

describe('daysToMilliseconds', () => {
  test.todo('should convert days to milliseconds', () => {
    assert.equal(daysToMilliseconds(2), 172800000)
    assert.equal(daysToMilliseconds(1.5), 129600000)
  })
})
