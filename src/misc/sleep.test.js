import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import sleep from './sleep.js'

describe('sleep', () => {
  test.todo('should sleep (delay) for the specified number of seconds', async () => {
    const start = new Date()
    await sleep(1)
    const end = new Date()
    assert.deepEqual(end.getUTCSeconds() - start.getUTCSeconds(), 1)
  })
})
