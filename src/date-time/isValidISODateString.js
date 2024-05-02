/**
 * Checks if the given string represents a valid ISO date string.
 *
 * @param {string} dateString - The date string to validate in ISO format (YYYY-MM-DD).
 * @returns {boolean} Returns true if the string represents a valid ISO date string, otherwise returns false.
 */
export default function isValidISODateString (dateString) {
  const isoDateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
  return (
    isoDateRegex.test(dateString) &&
    new Date(dateString).toString() !== 'Invalid Date'
  )
}
