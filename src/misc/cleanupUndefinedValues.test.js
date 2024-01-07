import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import cleanupUndefinedValues from './cleanupUndefinedValues.js'

describe('cleanupUndefinedValues', () => {
  test('should recursively remove properties with undefined values from an object or array', () => {
    const data = { a: 1, b: undefined, c: { d: 2, e: undefined }, f: [undefined, 3] }

    assert.deepEqual(cleanupUndefinedValues(data), { a: 1, c: { d: 2 }, f: [3] })
  })
})
