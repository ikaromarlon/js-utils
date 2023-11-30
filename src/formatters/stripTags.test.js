import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import stripTags from './stripTags.js'

describe('stripTags', () => {
  test.todo('should remove HTML tags from a string', () => {
    assert.equal(stripTags('<p>Hello <b>world</b>!</p>'), 'Hello world!')
  })
})
