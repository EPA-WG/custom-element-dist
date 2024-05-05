import { expect, test } from 'vitest'
import { deepEqual}     from './custom-element/custom-element.js'

test('deepEqual', () => {
  expect(deepEqual(1, 1) ).toBe(true);
  expect(deepEqual({}, null) ).toBe(false);
  expect(deepEqual({a:1},{a:1,b:2}) ).toBe(false);
  expect(deepEqual({a:1},{a:2}) ).toBe(false);
  expect(deepEqual({a:1},{a:1}) ).toBe(true);
})
