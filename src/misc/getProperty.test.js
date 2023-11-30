import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import getProperty from './getProperty.js'

describe('getProperty', () => {
  test.todo('should get the value of a property in an object using a provided path string', () => {
    const obj = { user: { name: 'John', addresses: [{ city: 'New York' }] } }

    assert.equal(getProperty(obj, 'user.name'), 'John')
    assert.equal(getProperty(obj, 'user.addresses[0].city'), 'New York')
  })
})
