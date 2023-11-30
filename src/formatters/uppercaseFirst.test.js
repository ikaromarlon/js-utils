import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import uppercaseFirst from './uppercaseFirst.js'

describe('uppercaseFirst', () => {
  test.todo('should convert the first character of a string to uppercase', () => {
    assert.equal(uppercaseFirst('hello'), 'Hello')
    assert.equal(uppercaseFirst('hello world'), 'Hello world')
  })
})
