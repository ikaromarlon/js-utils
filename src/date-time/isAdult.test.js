import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import isAdult from './isAdult.js'

describe('isAdult', () => {
  const ADULT_AGE = 18

  test('should return true if the age is 18 or older', () => {
    assert.equal(isAdult(ADULT_AGE), true)
    assert.equal(isAdult(ADULT_AGE + 1), true)
  })

  test('should return false if the age is less than 18', () => {
    assert.equal(isAdult(ADULT_AGE - 1), false)
  })

  test('should return true if the date corresponds to an adult person (18+)', () => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - ADULT_AGE)
    assert.equal(isAdult(date), true)
  })

  test('should return false if the date corresponds to a person under 18', () => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - 17)
    assert.equal(isAdult(date), false)
  })

  test('should return true if the date corresponds to a person who has already had their 18th birthday this year', () => {
    const today = new Date()
    const year = today.getFullYear() - ADULT_AGE
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    assert.equal(isAdult(`${year}-${month}-${day}`), true)
  })

  test('should return false if the date corresponds to a person who has not yet had their 18th birthday this year', () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    assert.equal(isAdult(`${year - 17}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`), false) // 17th birthday
    assert.equal(isAdult(`${year - ADULT_AGE}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`), false) // 1 month to goal
    assert.equal(isAdult(`${year - ADULT_AGE}-${String(month).padStart(2, '0')}-${String(day + 1).padStart(2, '0')}`), false) // 1 day to goal
  })

  test('should return false if the input is not a valid age or date', () => {
    assert.equal(isAdult(), false)
    assert.equal(isAdult(null), false)
    assert.equal(isAdult(''), false)
    assert.equal(isAdult(true), false)
    assert.equal(isAdult('Invalid date'), false)
    assert.equal(isAdult({}), false)
  })
})
