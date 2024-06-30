import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import cloneObjectExcludingProps from './cloneObjectExcludingProps.js'

describe('cloneObjectExcludingProps', () => {
  const obj = { name: 'John', age: 30 }

  test('should clone an object excluding specified properties', () => {
    const excludedProps = ['age']
    const expected = { name: 'John' }

    const result = cloneObjectExcludingProps(obj, excludedProps)

    assert.deepEqual(result, expected)
  })

  test('should return an empty object if all properties are excluded', () => {
    const excludedProps = ['name', 'age']

    const result = cloneObjectExcludingProps(obj, excludedProps)

    assert.deepEqual(result, {})
  })

  test('should return the same object if no properties are excluded', () => {
    const result = cloneObjectExcludingProps(obj)

    assert.deepEqual(result, obj)
  })
})
