import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import nullProperties from './nullProperties.js'

describe('nullProperties', () => {
  test.todo('should recursively replace non-object properties with null or empty objects in an object or array.', () => {
    const data = { a: 1, b: undefined, c: { d: 2, e: undefined }, f: [undefined, 3] }

    assert.deepEqual(nullProperties(data), { a: null, b: null, c: { d: null, e: null }, f: [null, null] })

    assert.deepEqual(nullProperties(data, true), { a: null, b: null, c: {}, f: [] })
  })
})
