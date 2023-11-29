/**
 * Converts a time value in HH:mm format to decimal representation.
 *
 * @param {string} value - The time value to be converted to decimal.
 * @returns {number} Returns the decimal representation of the time value.
 * @throws {Error} Throws an error if the input time format is invalid.
 * @example
 * const result = timeToDecimal('08:30'); // Output: 8.5
 * const result2 = timeToDecimal('12:45'); // Output: 12.75
 */
export default function timeToDecimal (value) {
  /**
   * Regular expression for validating the time format.
   *
   * Matches HH:mm where:
   * - HH is hours from 0 to any positive integer.
   * - mm is minutes from 00 to 59.
   */
  const timeFormat = /^(?:\d+):[0-5]\d$/

  if (!timeFormat.test(value)) {
    throw new Error('Invalid time format')
  }

  const [hours, minutes] = value.split(':')
  const dec = parseInt((minutes / 6) * 10, 10)
  return parseFloat(`${parseInt(hours, 10)}.${(dec < 10 ? `0${dec}` : dec)}`)
}
