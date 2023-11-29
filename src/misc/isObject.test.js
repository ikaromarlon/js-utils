import { describe, test } from 'node:test'
import assert from 'node:assert'
import isObject from './isObject.js'

describe('isObject', () => {
  test.todo('should return true', () => {
    let value
    let result
    const expected = true

    value = {}
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = { key: 'value' }
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = new (class {})()
    result = isObject(value)
    assert.strictEqual(result, expected)
  })

  test.todo('should return false', () => {
    let value
    let result
    const expected = false

    value = function () {}
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = class {}
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = true
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = false
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = undefined
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = null
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = ''
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = 'value'
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = 0
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = 1
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = []
    result = isObject(value)
    assert.strictEqual(result, expected)

    value = [0, 1]
    result = isObject(value)
    assert.strictEqual(result, expected)
  })
})
