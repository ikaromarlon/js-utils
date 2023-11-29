/**
 * Checks if a given value is empty. The function considers a value as empty if it
 * is falsy or, in the case of an object, has no own enumerable properties.
 *
 * @param {*} value - The value to check for emptiness.
 * @returns {boolean} Returns `true` if the value is empty, `false` otherwise.
 * @example
 * const result = isEmpty(''); // Output: true
 * const result2 = isEmpty([]); // Output: true
 * const result3 = isEmpty({ key: 'value' }); // Output: false
 */
export default function isEmpty (value) {
  return !value || (typeof value === 'object' && !Object.keys(value).length)
}
