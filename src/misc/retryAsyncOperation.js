import sleep from './sleep.js'

/**
 * Retries an asynchronous operation until it succeeds or the maximum number of attempts is reached.
 * @param {Function} asyncFn - The asynchronous function to be retried.
 * @param {number} [initialTimeout=1000] - The initial timeout value in milliseconds between retries. Defaults to 1000 milliseconds.
 * @param {number} [maxAttempts=3] - The maximum number of attempts before giving up. Defaults to 3 attempts.
 * @param {Function} [errorHandler] - An optional function to handle specific errors and decide whether to retry or not.
 * @returns {Promise<any>} A promise resolving to the result of the successful operation, or rejecting with an error if all attempts fail.
 */
export default async function retryAsyncOperation (asyncFn, initialTimeout = 1000, maxAttempts = 3, errorHandler) {
  try {
    return await asyncFn()
  } catch (err) {
    if (errorHandler) {
      const result = errorHandler(err)
      if (result) return result
    }

    if (maxAttempts > 0) {
      await sleep(initialTimeout)
      return await retryAsyncOperation(asyncFn, initialTimeout * 2, maxAttempts - 1)
    }

    throw new Error('maximum number of attempts reached', { cause: err })
  }
}
