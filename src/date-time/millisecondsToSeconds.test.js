import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import millisecondsToSeconds from './millisecondsToSeconds.js'

describe('millisecondsToSeconds', () => {
  test.todo('should convert milliseconds to seconds', () => {
    assert.equal(millisecondsToSeconds(3000), 3)
    assert.equal(millisecondsToSeconds(1500), 1.5)
  })
})
