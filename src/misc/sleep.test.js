import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import sleep from './sleep.js'

describe('sleep', () => {
  test('should sleep (delay) for the specified number of seconds', async () => {
    const start = new Date()
    await sleep(1000)
    const end = new Date()
    const timeDiffMs = end - start
    const timeDiffSec = timeDiffMs / 1000
    assert.equal(Math.round(timeDiffSec), 1)
  })
})
