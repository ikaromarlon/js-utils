/**
 * Gets the value of a property in an object using a provided path string.
 *
 * @param {Object} obj - The object from which to retrieve the property.
 * @param {string} path - The path to the property in dot notation. Array indices can also be represented with square brackets.
 * @returns {*} Returns the value of the specified property or `null` if the property is not found.
 * @example
 * const obj = { user: { name: 'John', addresses: [{ city: 'New York' }] } };
 * const result = getProperty(obj, 'user.name'); // Output: 'John'
 * const result2 = getProperty(obj, 'user.addresses[0].city'); // Output: 'New York'
 */
export default function getProperty (obj, path) {
  /**
   * Recursive function to get the value of a nested property in an object.
   *
   * @param {Object} innerObj - The object to traverse.
   * @param {string} prop - The current property or index to access.
   * @param {...string} props - Remaining properties or indices in the path.
   * @returns {*} Returns the value of the specified property or `null` if not found.
   * @private
   */
  const _get = (innerObj, prop, ...props) => {
    if (!innerObj) return null
    const value = innerObj[prop]
    if (!props.length || !value) return value
    return _get(value, ...props)
  }

  // Replace square brackets with dots and split the path string
  const pathArray = (path || '').replace(/\[/g, '.').replace(/\]/g, '').split('.')

  return _get(obj, ...pathArray)
}
