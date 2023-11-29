/**
 * Converts a value representing a number of milliseconds to days.
 *
 * @param {number} value - The number of milliseconds to be converted.
 * @returns {number} Returns the equivalent value in days.
 * @example
 * const result = millisecondsToDays(172800000); // Output: 2
 * const result2 = millisecondsToDays(129600000); // Output: 1.5
 */
export default function millisecondsToDays (value) {
  return value / 8.64e+7
}
