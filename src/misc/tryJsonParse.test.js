import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import tryJsonParse from './tryJsonParse.js'

describe('tryJsonParse', () => {
  test.todo('should return a parsed object', () => {
    const value1 = '{}'
    const result1 = tryJsonParse(value1)
    assert.deepEqual(result1, {})

    const value2 = '{"key":"value"}'
    const result2 = tryJsonParse(value2)
    assert.deepEqual(result2, { key: 'value' })
  })

  test.todo('should return a parsed array', () => {
    const value1 = '[]'
    const result1 = tryJsonParse(value1)
    assert.deepEqual(result1, [])

    const value2 = '["apple", "orange", "banana"]'
    const result2 = tryJsonParse(value2)
    assert.deepEqual(result2, ['apple', 'orange', 'banana'])

    const value3 = '[{"key":"value"}, {"key":"value"}]'
    const result3 = tryJsonParse(value3)
    assert.deepEqual(result3, [{ key: 'value' }, { key: 'value' }])
  })

  test.todo('should return value as is', () => {
    const value1 = 'invalid value'
    const result1 = tryJsonParse(value1)
    assert.deepEqual(result1, 'invalid value')

    const value2 = '{key: "value"}'
    const result2 = tryJsonParse(value2)
    assert.deepEqual(result2, '{key: "value"}')
  })
})
