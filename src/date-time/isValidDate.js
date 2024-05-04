import isValidDateInstance from './isValidDateInstance.js'
import isValidISODateString from './isValidISODateString.js'

/**
 * Checks whether the given date is valid.
 *
 @param {Date | string} date - The date to be validated, can be a Date object or a string in ISO 8601 format (YYYY-MM-DD)
 * @returns {boolean} - Returns true if the date is valid, false otherwise.
 */
export default function isValidDate (date) {
  return (
    isValidDateInstance(date) || isValidISODateString(date)
  )
}
