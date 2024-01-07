import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import makeArraySort from './makeArraySort.js'

describe('makeArraySort', () => {
  test.todo('should create a comparator function for sorting an array of objects based on a specified key.', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ]

    // default ordering: asc
    assert.deepEqual(
      [...data].sort(makeArraySort('age')),
      [
        { name: 'Alice', age: 25 },
        { name: 'John', age: 30 },
        { name: 'Bob', age: 35 }
      ]
    )

    assert.deepEqual(
      [...data].sort(makeArraySort('age', 'asc')),
      [
        { name: 'Alice', age: 25 },
        { name: 'John', age: 30 },
        { name: 'Bob', age: 35 }
      ]
    )

    assert.deepEqual(
      [...data].sort(makeArraySort('age', 'desc')),
      [
        { name: 'Bob', age: 35 },
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 }
      ]
    )

    // non-existing key, nothing changes
    assert.deepEqual(
      [...data].sort(makeArraySort('height')),
      [
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 }
      ]
    )
  })
})
