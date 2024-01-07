import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import tryJsonParse from './tryJsonParse.js'

describe('tryJsonParse', () => {
  test('should return a parsed object', () => {
    assert.deepEqual(tryJsonParse('{}'), {})
    assert.deepEqual(tryJsonParse('{"key":"value"}'), { key: 'value' })
  })

  test('should return a parsed array', () => {
    assert.deepEqual(tryJsonParse('[]'), [])
    assert.deepEqual(tryJsonParse('["apple", "orange", "banana"]'), ['apple', 'orange', 'banana'])
    assert.deepEqual(tryJsonParse('[{"key":"value"}, {"key":"value"}]'), [{ key: 'value' }, { key: 'value' }])
  })

  test('should return value as is', () => {
    assert.deepEqual(tryJsonParse('invalid value'), 'invalid value')
    assert.deepEqual(tryJsonParse('{key: "value"}'), '{key: "value"}')
  })
})
