/**
 * Applies a mask to a given value.
 *
 * @param {string} mask - The mask to apply. Use 'x' as a placeholder for characters from the value.
 * @param {number|string} value - The value to be masked.
 * @returns {string} Returns the masked string based on the provided mask.
 * @example
 * const result = applyMask('xx-xx', 12345);
 * // Output: '12-34'
 */
export default function applyMask (mask, value) {
  const arr = [...String(value)]
  return mask.replace(/x/g, () => arr.shift())
}
