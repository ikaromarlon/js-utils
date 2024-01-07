import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import removeAccents from './removeAccents.js'

describe('removeAccents', () => {
  test('should removes accents (diacritics) from a string', () => {
    assert.equal(removeAccents('cliché'), 'cliche')
    assert.equal(removeAccents('über'), 'uber')
  })
})
