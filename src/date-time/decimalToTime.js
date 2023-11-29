/**
 * Converts a decimal value to a time string in HH:mm format.
 *
 * @param {number|string} value - The decimal value to be converted.
 * @returns {string} Returns the equivalent time string in HH:mm format.
 * @example
 * const result = decimalToTime(2.5); // Output: '2:30'
 * const result2 = decimalToTime('1.75'); // Output: '1:45'
 */
export default function decimalToTime (value) {
  const [hours, fraction = 0] = String(value).split('.').map(Number)
  const minutes = String(Number(`0.${fraction}`) * 60)
  return `${hours}:${minutes.padStart(2, '0')}`
}
