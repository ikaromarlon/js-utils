import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import applyMask from './applyMask.js'

describe('applyMask', () => {
  test('Should apply a mask to a given value', () => {
    assert.equal(applyMask('xx-xx', 12345), '12-34')
    assert.equal(applyMask('(xx) xxxxx-xxxx', '11999997777'), '(11) 99999-7777')
    assert.equal(applyMask('xxx.xxx.xxx-xx', '12345678901'), '123.456.789-01')
  })
})
