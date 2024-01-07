import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import replaceLast from './replaceLast.js'

describe('replaceLast', () => {
  test('Should replace the last occurrence of a substring in a string', () => {
    assert.equal(replaceLast('Hello world, world!', 'world', 'universe'), 'Hello world, universe!')
  })
})
