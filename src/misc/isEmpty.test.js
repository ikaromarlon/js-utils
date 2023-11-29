import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isEmpty from './isEmpty.js'

describe('isEmpty', () => {
  test.todo('should return true', () => {
    assert.equal(isEmpty(undefined), true)
    assert.equal(isEmpty(null), true)
    assert.equal(isEmpty(0), true)
    assert.equal(isEmpty(''), true)
    assert.equal(isEmpty(false), true)
    assert.equal(isEmpty({}), true)
    assert.equal(isEmpty([]), true)
    assert.equal(isEmpty(NaN), true)
  })

  test.todo('should return false', () => {
    assert.equal(isEmpty(1), false)
    assert.equal(isEmpty('value'), false)
    assert.equal(isEmpty(true), false)
    assert.equal(isEmpty({ key: 'value' }), false)
    assert.equal(isEmpty([0]), false)
    assert.equal(isEmpty(function () {}), false)
    assert.equal(isEmpty(class {}), false)
    assert.equal(isEmpty(Infinity), false)
  })
})
