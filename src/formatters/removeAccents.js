/**
 * Removes accents (diacritics) from a string.
 *
 * @param {string} value - The string from which to remove accents.
 * @returns {string} Returns a new string with accents removed.
 * @example
 * const result = removeAccents('cliché'); // Output: 'cliche'
 * const result2 = removeAccents('über'); // Output: 'uber'
 */
export default function removeAccents (value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
