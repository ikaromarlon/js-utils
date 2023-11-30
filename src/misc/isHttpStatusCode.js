/**
 * Checks if a given value is a valid HTTP status code.
 *
 * @param {number|string} code - The value to check for being a valid HTTP status code.
 * @returns {boolean} Returns `true` if the value is a valid HTTP status code, `false` otherwise.
 * @example
 * const result = isHttpStatusCode(200); // Output: true
 * const result2 = isHttpStatusCode('404'); // Output: true
 * const result3 = isHttpStatusCode(700); // Output: false
 * const result4 = isHttpStatusCode('abc'); // Output: false
 */
export default function isHttpStatusCode (code) {
  return Boolean(
    String(code).match(/\b(1\d{2}|2\d{2}|3[0-8]\d|3[0-6][1-9]|4\d{2}|5\d{2})\b/)
  )
}
