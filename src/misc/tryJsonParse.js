/**
 * Attempts to parse a JSON string and returns the parsed object. If parsing fails,
 * it returns the original value.
 *
 * @param {string} value - The JSON string to parse.
 * @returns {object|string} Returns the parsed object if successful, or the original
 * string if parsing fails.
 * @example
 * const result = tryJsonParse('{"key": "value"}');
 * console.log(result); // Output: { key: 'value' }
 *
 * const result2 = tryJsonParse('invalid json');
 * console.log(result2); // Output: 'invalid json'
 */
export default function tryJsonParse (value) {
  try {
    return JSON.parse(value)
  } catch (err) {
    return value;
  }
}
