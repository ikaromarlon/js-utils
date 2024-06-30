/**
 * Clones an object, excluding the specified properties.
 *
 * @param {object} obj - The original object to clone.
 * @param {string[]} excludedProps - An array of property names to exclude from the cloned object.
 * @returns {object} - A new object with the excluded properties omitted.
 */
export default function cloneObjectExcludingProps (obj, excludedProps = []) {
  return Object.keys(obj).reduce((newObj, key) => {
    if (!excludedProps.includes(key)) {
      newObj[key] = obj[key]
    }
    return newObj
  }, {})
}
