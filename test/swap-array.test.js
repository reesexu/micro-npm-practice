const should = require('should')
const swapArray = require('../packages/swap-array')
const array = ['a', 'b', 'c']
describe('swap-array', () => {
  it ('swap two array-items by its index', () => {
    swapArray(array, 0, 1).should.eql(['b', 'a', 'c'])
    swapArray(array, 1, 2).should.eql(['a', 'c', 'b'])
  })
  it ('should throw', () => {
    (() => swapArray('', 0, 2)).should.throw()
  })
})