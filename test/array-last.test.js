const should = require('should')
const arrayLast = require('../packages/array-last')
const testArrar = ['a', 'b', 'c', 'd', 'e', 'f']
describe('array-last', () => {
  it ('should throw', () => {
    (() => arrayLast('test')).should.throw();
    (() => arrayLast({})).should.throw();
    (() => arrayLast(1)).should.throw();
  })
  it ('should return the last element in the array', () => {
    arrayLast(testArrar).should.equal('f')
    arrayLast(testArrar, 1).should.equal('f')
  })
  it ('it sholud return the last n elements if the array', () => {
    arrayLast(testArrar, 3).should.eql(['d', 'e', 'f'])
    arrayLast(testArrar, 2).should.eql(['e', 'f'])
    arrayLast(testArrar, '2').should.eql(['e', 'f'])
  })
  it ('it sholud return null', () => {
    should.not.exist(arrayLast([]))
    should.not.exist(arrayLast([], 2))
  })
})