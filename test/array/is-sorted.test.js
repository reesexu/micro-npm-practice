const assert = require('assert')
const isSorted = require('../../packages/array/is-sorted')
const testCases = [
  {
    array: [],
    expected: true
  }, {
    array: [1],
    expected: true
  }, {
    array: [5],
    expected: true
  }, {
    array: [
      1, 5
    ],
    expected: true
  }, {
    array: [
      1, 2, 3, 4, 5
    ],
    expected: true
  }, {
    array: [
      1, 1, 3, 4, 5
    ],
    expected: true
  }, {
    array: [
      1, 1.5, 3, 4, 5
    ],
    expected: true
  }, {
    array: [
      1, 2, 4, 3, 6
    ],
    expected: false
  }
]
describe('is-sorted', () => {
  testCases.forEach(item => {
    it(`should return ${item.expected}`, () => {
      assert.equal(isSorted(item.array), item.expected)
    })
  })
})