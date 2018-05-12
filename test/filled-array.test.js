const should = require('should')
const filledArray = require('../packages/filled-array')
const testCases = [
  {
    arg1: 'a',
    arg2: 0,
    val: []
  }, {
    arg1: 'foo',
    arg2: 2,
    val: ['foo', 'foo']
  }, {
    arg1: 2,
    arg2: 3,
    val: [2, 2, 2]
  }
]
describe('filled-array', () => {
  it('should return the filled array', () => {
    testCases.forEach(item => {
      filledArray(item.arg1, item.arg2)
        .should
        .eql(item.val)
    })
  })
  it('should throw error', () => {
    (() => filledArray(1, '')).should.throw();
    (() => filledArray(1, -2)).should.throw();
  })
})