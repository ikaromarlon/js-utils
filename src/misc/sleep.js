/**
 * Sleeps (delays) for the specified number of seconds.
 *
 * @param {number} [time=0] - The amount of time to sleep in milliseconds. Defaults to 0 if not provided.
 * @returns {Promise<void>} A promise that resolves after the specified sleep duration.
 *
 * @example
 * async function exampleUsage() {
 *   console.log('Start')
 *   await sleep(2000)
 *   console.log('After 2 seconds')
 * }
 * // Call the exampleUsage function
 * await exampleUsage()
 */
export default async function sleep (time = 0) {
  return new Promise(resolve => setTimeout(resolve, time))
}
