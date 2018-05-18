const should = require('should')
const inArray = require('../../packages/array/in-array')
describe('in-array', () => {
  it('it should return true', () => {
    inArray(['a', 'b', 'c'], 'a').should.equal(true)
    inArray(['a', 'b', 'c'], 'c').should.equal(true)
  })
  it ('it should return false', () => {
    inArray(null, 'a').should.equal(false)
    inArray(['a', 'b', 'c'], 'd').should.equal(false)
    inArray(['a', 'b', 'c']).should.equal(false)
  })
})