import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import brDateToISO from './brDateToISO.js'

describe('brDateToISO', () => {
  test('should convert a Brazilian date string (DD/MM/YYYY) with an optional time string into ISO 8601 date string format', () => {
    assert.equal(brDateToISO('31/12/2022'), '2022-12-31T03:00:00.000Z')
    assert.equal(brDateToISO('01/01/2023', '12:30:45.500'), '2023-01-01T15:30:45.500Z')
  })
})
