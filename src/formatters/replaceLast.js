/**
 * Replaces the last occurrence of a substring in a string.
 *
 * @param {string} value - The original string.
 * @param {string} toReplace - The substring to be replaced.
 * @param {string} replaceWith - The replacement for the last occurrence of the substring.
 * @returns {string} Returns a new string with the last occurrence of the substring replaced.
 * @example
 * const result = replaceLast('Hello world, world!', 'world', 'universe');
 * // Output: 'Hello world, universe!'
 */
export default function replaceLast (value, toReplace, replaceWith) {
  return value.replace(new RegExp(`${toReplace}([^${toReplace}]*)$`, 'gm'), `${replaceWith}$1`)
}
