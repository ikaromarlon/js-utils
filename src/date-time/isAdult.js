import isValidISODateString from './isValidISODateString.js'

/**
 * Checks if the given age or date corresponds to an adult person (18+).
 *
 * @param {number | string | Date} ageOrDate - The age (in years), date as a string in ISO format, or Date object to check.
 * @returns {boolean} Returns true if the age or date corresponds to an adult person (18+), otherwise returns false.
 */
export default function isAdult (ageOrDate) {
  const ADULT_AGE = 18
  const ALLOWED_TYPES = ['number', 'object', 'string']

  if (
    !ageOrDate ||
    !ALLOWED_TYPES.includes(typeof ageOrDate) ||
    (typeof ageOrDate === 'object' && !(ageOrDate instanceof Date)) ||
    (typeof ageOrDate === 'string' && !isValidISODateString(ageOrDate))
  ) {
    return false
  }

  if (typeof ageOrDate === 'number') return ageOrDate >= ADULT_AGE

  const d = new Date(ageOrDate)

  const today = new Date()
  const ageDiff = today.getFullYear() - d.getFullYear()
  const hasBirthdayOccurred =
    today.getMonth() > d.getMonth() ||
    (today.getMonth() === d.getMonth() && today.getDate() >= d.getDate())

  return ageDiff > ADULT_AGE || (ageDiff === ADULT_AGE && hasBirthdayOccurred)
}
