import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isoDateToBR from './isoDateToBR.js'

describe('isoDateToBR', () => {
  test.todo('should convert a ISO 8601 date string into Brazilian date string format (DD/MM/YYYY)', () => {
    assert.deepEqual(isoDateToBR('2022-12-31'), { date: '31/12/2022', time: '00:00:00.000' })
    assert.deepEqual(isoDateToBR('2023-01-01T00:00:00.000'), { date: '01/01/2023', time: '00:00:00.000' })
    assert.deepEqual(isoDateToBR('2023-01-01T00:00:00.000Z'), { date: '31/12/2022', time: '21:00:00.000' })
    assert.deepEqual(isoDateToBR('2023-01-01T23:59:59.999Z'), { date: '01/01/2023', time: '20:59:59.999' })
  })
})
