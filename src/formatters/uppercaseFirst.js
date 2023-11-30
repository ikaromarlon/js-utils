/**
 * Converts the first character of a string to uppercase.
 *
 * @param {string} value - The input string.
 * @returns {string} Returns a new string with the first character in uppercase.
 * @example
 * const result = uppercaseFirst('hello');
 * // Output: 'Hello'
 */
export default function uppercaseFirst (value) {
  return String(value).replace(/^.{1}/, (chr) => chr.toUpperCase())
}
