import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import sortArray from './sortArray.js'

describe('sortArray', () => {
  test.todo('should create a comparator function for sorting an array of objects based on a specified key.', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ]

    assert.deepEqual(
      data.sort(sortArray('age', 'asc')),
      [
        { name: 'Alice', age: 25 },
        { name: 'John', age: 30 },
        { name: 'Bob', age: 35 }
      ]
    )

    assert.deepEqual(
      data.sort(sortArray('age', 'desc')),
      [
        { name: 'Bob', age: 35 },
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 }
      ]
    )
  })
})
