const should = require('should')
const arrayRange = require('../../packages/array/array-range')
describe('array-range', () => {
  it ('it should return a new array in the interval', () => {
    arrayRange(0, 4).should.eql([0, 1, 2, 3])
    arrayRange(4).should.eql([0, 1, 2, 3])
    arrayRange().should.eql([])
    arrayRange('foo').should.eql([])
    arrayRange(-2, 1).should.eql([-2, -1, 0])
  })
})
