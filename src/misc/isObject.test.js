import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isObject from './isObject.js'

describe('isObject', () => {
  test('should return true', () => {
    assert.equal(isObject({}), true)
    assert.equal(isObject({ key: 'value' }), true)
  })

  test('should return false', () => {
    assert.equal(isObject(true), false)
    assert.equal(isObject(false), false)
    assert.equal(isObject(undefined), false)
    assert.equal(isObject(null), false)
    assert.equal(isObject(''), false)
    assert.equal(isObject('value'), false)
    assert.equal(isObject(0), false)
    assert.equal(isObject(1), false)
    assert.equal(isObject([]), false)
    assert.equal(isObject([0, 1]), false)
  })
})
