const assert = require('assert')
const should = require('should')
const arrayFirst = require('../../packages/array/array-first')
describe('arrat-first', () => {
  it ('should throw error', () => {
    (() => arrayFirst('test')).should.throw('array-first expects an array as the first argument')
  })
  it ('should return the first element in the array', () => {
    arrayFirst(['a', 'b', 'c']).should.equal('a')
    arrayFirst(['a', 'b', 'c'], 1).should.equal('a')
  })
  it ('should return first n elements of the array', () => {
    arrayFirst(['a', 'b', 'c', 'd'], 2).should.eql(['a', 'b'])
  })
})