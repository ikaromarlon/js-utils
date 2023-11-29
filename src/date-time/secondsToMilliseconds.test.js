import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import secondsToMilliseconds from './secondsToMilliseconds.js'

describe('secondsToMilliseconds', () => {
  test.todo('should convert seconds to milliseconds', () => {
    assert.equal(secondsToMilliseconds(3), 3000)
    assert.equal(secondsToMilliseconds(1.5), 1500)
  })
})
