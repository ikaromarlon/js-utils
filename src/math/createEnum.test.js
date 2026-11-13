import { describe, test } from 'node:test'
import { strict as assert } from 'node:assert'
import createEnum from './createEnum.js'

describe('createEnum', () => {
  describe('array definitions', () => {
    test('should create a numeric enum by default with reverse mappings', () => {
      const Status = createEnum(['PENDING', 'SUCCESS', 'ERROR'])

      assert.equal(Status.PENDING, 0)
      assert.equal(Status.SUCCESS, 1)
      assert.equal(Status.ERROR, 2)
      assert.equal(Status[0], 'PENDING')
      assert.equal(Status[1], 'SUCCESS')
      assert.equal(Status[2], 'ERROR')
    })

    test('should create a string enum when type is "string"', () => {
      const Direction = createEnum(['UP', 'DOWN', 'LEFT', 'RIGHT'], { type: 'string' })

      assert.equal(Direction.UP, 'UP')
      assert.equal(Direction.DOWN, 'DOWN')
      assert.equal(Direction.LEFT, 'LEFT')
      assert.equal(Direction.RIGHT, 'RIGHT')
      assert.equal(Direction[0], undefined)
    })

    test('should handle an empty array definition', () => {
      const Empty = createEnum([])

      assert.deepEqual(Empty.keys(), [])
      assert.deepEqual(Empty.values(), [])
      assert.deepEqual(Empty.entries(), [])
    })
  })

  describe('object definitions', () => {
    test('should create a numeric enum with reverse mappings from an object', () => {
      const HttpStatus = createEnum({
        OK: 200,
        NOT_FOUND: 404,
        INTERNAL_ERROR: 500
      })

      assert.equal(HttpStatus.OK, 200)
      assert.equal(HttpStatus.NOT_FOUND, 404)
      assert.equal(HttpStatus.INTERNAL_ERROR, 500)
      assert.equal(HttpStatus[200], 'OK')
      assert.equal(HttpStatus[404], 'NOT_FOUND')
      assert.equal(HttpStatus[500], 'INTERNAL_ERROR')
    })

    test('should create a string enum without reverse mappings from an object', () => {
      const Role = createEnum({
        ADMIN: 'admin',
        USER: 'user'
      })

      assert.equal(Role.ADMIN, 'admin')
      assert.equal(Role.USER, 'user')
      assert.equal(Role.admin, undefined)
    })

    test('should support heterogeneous enums and negative/decimal finite numbers', () => {
      const Mixed = createEnum({
        NONE: -1,
        HALF: 0.5,
        LABEL: 'label'
      })

      assert.equal(Mixed.NONE, -1)
      assert.equal(Mixed[-1], 'NONE')
      assert.equal(Mixed.HALF, 0.5)
      assert.equal(Mixed[0.5], 'HALF')
      assert.equal(Mixed.LABEL, 'label')
    })

    test('should ignore options.type when an object definition is provided', () => {
      const Code = createEnum({ A: 10, B: 20 }, { type: 'string' })

      assert.equal(Code.A, 10)
      assert.equal(Code[10], 'A')
    })

    test('should handle an empty object definition', () => {
      const Empty = createEnum({})

      assert.deepEqual(Empty.keys(), [])
      assert.deepEqual(Empty.values(), [])
      assert.deepEqual(Empty.entries(), [])
    })
  })

  describe('immutability and property descriptors', () => {
    test('should return a frozen object that cannot be modified', () => {
      const Status = createEnum(['PENDING', 'SUCCESS'])

      assert.equal(Object.isFrozen(Status), true)
      assert.throws(() => { Status.PENDING = 99 }, TypeError)
      assert.throws(() => { Status.EXTRA = 2 }, TypeError)
      assert.throws(() => { delete Status.PENDING }, TypeError)
    })

    test('should define utility methods as non-enumerable', () => {
      const Direction = createEnum(['UP', 'DOWN'], { type: 'string' })
      const enumerableKeys = Object.keys(Direction)

      assert.deepEqual(enumerableKeys, ['UP', 'DOWN'])
      assert.equal(enumerableKeys.includes('keys'), false)
      assert.equal(enumerableKeys.includes('values'), false)
      assert.equal(enumerableKeys.includes('entries'), false)
      assert.equal(enumerableKeys.includes('has'), false)
      assert.equal(enumerableKeys.includes('get'), false)
    })
  })

  describe('utility methods', () => {
    test('keys(), values(), and entries() should only include enum keys and return fresh copies', () => {
      const HttpStatus = createEnum({ OK: 200, NOT_FOUND: 404 })

      const keys = HttpStatus.keys()
      const values = HttpStatus.values()
      const entries = HttpStatus.entries()

      assert.deepEqual(keys, ['OK', 'NOT_FOUND'])
      assert.deepEqual(values, [200, 404])
      assert.deepEqual(entries, [['OK', 200], ['NOT_FOUND', 404]])

      keys.push('MUTATED')
      values.push(999)
      entries.push(['MUTATED', 999])

      assert.deepEqual(HttpStatus.keys(), ['OK', 'NOT_FOUND'])
      assert.deepEqual(HttpStatus.values(), [200, 404])
      assert.deepEqual(HttpStatus.entries(), [['OK', 200], ['NOT_FOUND', 404]])
    })

    test('has() should check both enum keys and enum values', () => {
      const Role = createEnum({ ADMIN: 'admin', GUEST: 0 })

      assert.equal(Role.has('ADMIN'), true)
      assert.equal(Role.has('admin'), true)
      assert.equal(Role.has('GUEST'), true)
      assert.equal(Role.has(0), true)
      assert.equal(Role.has('UNKNOWN'), false)
      assert.equal(Role.has(99), false)
      assert.equal(Role.has(undefined), false)
      assert.equal(Role.has(null), false)
    })

    test('get() should retrieve values by key or value and return undefined by default when missing', () => {
      const HttpStatus = createEnum({ OK: 200, LABEL: 'ok' })

      assert.equal(HttpStatus.get('OK'), 200)
      assert.equal(HttpStatus.get(200), 200)
      assert.equal(HttpStatus.get('LABEL'), 'ok')
      assert.equal(HttpStatus.get('ok'), 'ok')
      assert.equal(HttpStatus.get('MISSING'), undefined)
      assert.equal(HttpStatus.get(500), undefined)
    })

    test('get() should return configured fallback when key or value does not exist', () => {
      const Status = createEnum(['PENDING', 'SUCCESS'], { fallback: 'UNKNOWN' })
      const NullFallback = createEnum(['A'], { fallback: null })

      assert.equal(Status.get('PENDING'), 0)
      assert.equal(Status.get('INVALID'), 'UNKNOWN')
      assert.equal(NullFallback.get('INVALID'), null)
    })

    test('get() should throw an Error in strict mode when key or value does not exist', () => {
      const Status = createEnum(['PENDING', 'SUCCESS'], {
        strict: true,
        fallback: 'UNKNOWN'
      })

      assert.equal(Status.get('PENDING'), 0)
      assert.equal(Status.get(1), 1)
      assert.throws(
        () => Status.get('INVALID'),
        {
          name: 'Error',
          message: 'Unknown enum key or value: INVALID'
        }
      )
    })
  })

  describe('validation and errors', () => {
    test('should throw TypeError when definition is neither an array nor an object', () => {
      const invalidDefinitions = [undefined, null, 'PENDING', 123, true, () => {}]

      for (const invalid of invalidDefinitions) {
        assert.throws(
          () => createEnum(invalid),
          {
            name: 'TypeError',
            message: 'Enum definition must be an array or an object.'
          }
        )
      }
    })

    test('should throw TypeError when options.type is invalid', () => {
      assert.throws(
        () => createEnum(['A', 'B'], { type: 'boolean' }),
        {
          name: 'TypeError',
          message: 'Invalid enum type: "boolean". Expected "string" or "numeric".'
        }
      )
    })

    test('should throw TypeError when options.strict is not a boolean', () => {
      for (const invalidStrict of ['true', 1, null, {}]) {
        assert.throws(
          () => createEnum(['A', 'B'], { strict: invalidStrict }),
          {
            name: 'TypeError',
            message: 'strict must be a boolean.'
          }
        )
      }
    })

    test('should throw TypeError when an enum value is neither a string nor a finite number', () => {
      const invalidValues = [NaN, Infinity, -Infinity, null, undefined, true, {}, []]

      for (const invalidValue of invalidValues) {
        assert.throws(
          () => createEnum({ INVALID: invalidValue }),
          {
            name: 'TypeError',
            message: 'Invalid enum value for "INVALID".'
          }
        )
      }
    })
  })
})
