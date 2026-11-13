/**
 * Creates an immutable enum-like object supporting array and object definitions.
 *
 * When an array is provided, its elements are mapped to numeric values by default,
 * starting at 0, or to their own values when `type` is set to "string".
 *
 * When an object is provided, its keys and values are used directly, supporting
 * string, numeric, and heterogeneous enums, including numeric reverse mappings.
 *
 * The returned enum also exposes utility methods for retrieving and inspecting
 * its keys and values.
 *
 * @param {Array<string|number>|Object<string, string|number>} definition
 *   Enum definition. An array is converted into an enum using its indexes
 *   as numeric values by default. An object maps enum keys to their values.
 *
 * @param {Object} [options={}] Configuration options.
 * @param {"string"|"numeric"} [options.type="numeric"]
 *   Enum type when `definition` is an array. Use "string" to map each
 *   element to itself, or "numeric" to map elements to their indexes.
 *   Ignored when an object definition is provided.
 *
 * @param {*} [options.fallback=undefined]
 *   Value returned by `get()` when the requested key or value does not exist.
 *
 * @param {boolean} [options.strict=false]
 *   When true, `get()` throws an error if the requested key or value
 *   does not exist, instead of returning the fallback.
 *
 * @returns {Readonly<Object>} An immutable enum object with the following
 *   additional utility methods:
 *   - `keys()`   Returns an array containing the enum keys.
 *   - `values()` Returns an array containing the enum values.
 *   - `entries()` Returns an array of [key, value] pairs.
 *   - `has(value)` Checks whether a key or value exists.
 *   - `get(value)` Retrieves an enum value or applies fallback/strict behavior.
 *
 * @throws {TypeError} If the definition is neither an array nor an object.
 * @throws {TypeError} If the enum type is invalid.
 * @throws {TypeError} If strict is not a boolean.
 * @throws {TypeError} If an enum value is neither a string nor a finite number.
 * @throws {Error} If strict mode is enabled and get() receives an unknown key/value.
 *
 * @example
 * // Numeric enum (default)
 * const Status = createEnum(["PENDING", "SUCCESS", "ERROR"]);
 *
 * Status.PENDING; // 0
 * Status.SUCCESS; // 1
 * Status[2];      // "ERROR"
 *
 * @example
 * // String enum
 * const Direction = createEnum(
 *   ["UP", "DOWN", "LEFT", "RIGHT"],
 *   { type: "string" }
 * );
 *
 * Direction.UP; // "UP"
 *
 * @example
 * // Enum with fallback
 * const Status = createEnum(
 *   ["PENDING", "SUCCESS", "ERROR"],
 *   { fallback: "UNKNOWN" }
 * );
 *
 * Status.get("INVALID"); // "UNKNOWN"
 *
 * @example
 * // Strict enum
 * const Status = createEnum(
 *   ["PENDING", "SUCCESS", "ERROR"],
 *   { strict: true }
 * );
 *
 * Status.get("INVALID"); // Throws an Error
 *
 * @example
 * // Object-based enum
 * const HttpStatus = createEnum({
 *   OK: 200,
 *   NOT_FOUND: 404
 * });
 *
 * HttpStatus.OK;  // 200
 * HttpStatus[404]; // "NOT_FOUND"
 */
export default function createEnum (definition, options = {}) {
  const {
    type = 'numeric',
    fallback,
    strict = false
  } = options

  if (type !== 'string' && type !== 'numeric') {
    throw new TypeError(
      `Invalid enum type: "${type}". Expected "string" or "numeric".`
    )
  }

  if (typeof strict !== 'boolean') {
    throw new TypeError('strict must be a boolean.')
  }

  if (Array.isArray(definition)) {
    definition = Object.fromEntries(
      definition.map((value, index) => [
        value,
        type === 'string' ? value : index
      ])
    )
  }

  if (
    definition === null ||
    typeof definition !== 'object'
  ) {
    throw new TypeError(
      'Enum definition must be an array or an object.'
    )
  }

  const result = {}
  const enumKeys = new Set()
  const enumValues = new Map()

  for (const [key, value] of Object.entries(definition)) {
    if (enumKeys.has(key)) {
      throw new Error(`Duplicate enum key: ${key}`)
    }

    if (
      typeof value !== 'string' &&
      (typeof value !== 'number' || !Number.isFinite(value))
    ) {
      throw new TypeError(`Invalid enum value for "${key}".`)
    }

    enumKeys.add(key)
    result[key] = value

    if (typeof value === 'number') {
      // TypeScript-style numeric reverse mapping
      result[value] = key
    }

    enumValues.set(value, key)
  }

  // Lookup helper
  const lookup = (value) => {
    if (enumKeys.has(String(value))) {
      return result[value]
    }

    if (enumValues.has(value)) {
      return value
    }

    if (strict) {
      throw new Error(`Unknown enum key or value: ${value}`)
    }

    return fallback
  }

  Object.defineProperties(result, {
    keys: {
      value: () => [...enumKeys]
    },
    values: {
      value: () => [...enumKeys].map(key => result[key])
    },
    entries: {
      value: () => [...enumKeys].map(key => [
        key,
        result[key]
      ])
    },
    has: {
      value: value =>
        enumKeys.has(String(value)) ||
        enumValues.has(value)
    },
    get: {
      value: lookup
    }
  })

  return Object.freeze(result)
}
