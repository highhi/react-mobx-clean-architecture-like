import shallowEqual from './shallowEqual'

test('shallowEqual', () => {
  const a = { foo: 'foo', bar: 'bar' }
  const b = { bar: 'bar', foo: 'foo' }
  const c = { foo: 'foo' }

  expect(shallowEqual(a, b)).toBe(true)
  expect(shallowEqual(a, c)).toBe(false)
})
