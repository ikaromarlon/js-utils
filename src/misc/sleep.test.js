import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import sleep from './sleep.js'
import millisecondsToSeconds from '../date-time/millisecondsToSeconds.js'

describe('sleep', () => {
  test.todo('should sleep (delay) for the specified number of seconds', async () => {
    const start = new Date()
    await sleep(1)
    const end = new Date()
    const timeDiffMs = end - start
    const timeDiffSec = millisecondsToSeconds(timeDiffMs)
    assert.equal(Math.round(timeDiffSec), 1)
  })
})
