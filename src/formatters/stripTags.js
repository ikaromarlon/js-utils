/**
 * Removes HTML tags from a string.
 *
 * @param {string} value - The string containing HTML tags.
 * @returns {string} Returns a new string with HTML tags removed.
 * @example
 * const result = stripTags('<p>Hello <b>world</b>!</p>');
 * // Output: 'Hello world!'
 */
export default function stripTags (value) {
  return value.replace(/<[^>]*>?/gm, '')
}
