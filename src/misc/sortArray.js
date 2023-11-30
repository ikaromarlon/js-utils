/**
 * Creates a comparator function for sorting an array of objects based on a specified key.
 *
 * @param {string} key - The key by which to sort the objects in the array.
 * @param {'asc' | 'desc'} [order='asc'] - The order of sorting. Use 'asc' for ascending or 'desc' for descending.
 * @returns {Function} A comparator function for use with the `Array.sort()` method.
 * @example
 * const data = [
 *   { name: 'John', age: 30 },
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 35 }
 * ];
 * const sortedData = data.sort(sortArray('age', 'asc'));
 * // Result: [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
 */
export default function sortArray (key, order = 'asc') {
  /**
   * Comparator function for sorting objects based on the specified key.
   *
   * @param {Object} a - The first object to compare.
   * @param {Object} b - The second object to compare.
   * @returns {number} Returns a negative, zero, or positive number based on the comparison result.
   * @private
   */
  return (a, b) => {
    // If the key is not present in either object, treat them as equal
    if (!a[key] || !b[key]) return 0

    /**
     * Result of the comparison based on the specified key.
     *
     * @type {number}
     */
    let result = 0

    if (a[key] > b[key]) result = 1
    if (b[key] > a[key]) result = -1

    // Adjust the result based on the sorting order
    return order === 'desc' ? result * -1 : result
  }
}
