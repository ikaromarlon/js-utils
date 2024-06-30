import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import { generateSalt, hash, verify } from './encryption.js'

describe('Encryption util', () => {
  const password = 'password123'
  const salt = 'somesalt'

  describe('generateSalt', () => {
    test('should generate a random salt', () => {
      const salt = generateSalt()
      assert.equal(salt.length, 32)
    })
  })

  describe('hash', () => {
    test('should hash the plain password with the given salt', () => {
      const hashedPassword = hash(password, salt)
      assert.equal(hashedPassword.length, 128)
    })
  })

  describe('verify', () => {
    test('should return true if the plain password matches the hash', () => {
      const storedHash = hash(password, salt)
      const result = verify(storedHash, password, salt)
      assert.equal(result, true)
    })

    test('should return false if the plain password does not match the hash', () => {
      const result = verify('wronghash', password, salt)
      assert.equal(result, false)
    })
  })
})
