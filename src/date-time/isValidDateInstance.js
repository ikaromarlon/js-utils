/**
 * Checks whether the given date object is valid.
 *
 * @param {Date} date - The date object to be validated.
 * @returns {boolean} - Returns true if the date is valid, false otherwise.
 */
export default function isValidDateInstance (date) {
  return date instanceof Date && !Number.isNaN(date.getTime())
}
