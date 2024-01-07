import secondsToMilliseconds from '../date-time/secondsToMilliseconds.js'

/**
 * Sleeps (delays) for the specified number of seconds.
 *
 * @param {number} seconds - The number of seconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified sleep duration.
 *
 * @example
 * async function exampleUsage() {
 *   console.log('Start')
 *   await sleep(2)
 *   console.log('After 2 seconds')
 * }
 * // Call the exampleUsage function
 * await exampleUsage()
 */
export default function sleep (seconds) {
  return new Promise(resolve => setTimeout(resolve, secondsToMilliseconds(seconds)))
}
