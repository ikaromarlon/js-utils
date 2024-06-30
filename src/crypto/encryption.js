import crypto from 'node:crypto'

export function generateSalt () {
  return crypto.randomBytes(16).toString('hex')
}

export function hash (plain, salt) {
  const iterations = 210000
  const keyLength = 64
  const digest = 'sha512'
  const hash = crypto.pbkdf2Sync(plain, salt, iterations, keyLength, digest)
  return hash.toString('hex')
}

export function verify (hashed, plain, salt) {
  const encrypted = hash(plain, salt)
  return hashed === encrypted
}
