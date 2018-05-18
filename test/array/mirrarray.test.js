const should = require('should')
const mirrarray = require('../../packages/array/mirrarray')
describe('mirrarray', () => {
  it('Returns key mirror object as expected for an array of strings', () => {
    mirrarray(['this', 'that', 'another', 'again'])
      .should
      .eql({this: 'this', that: 'that', another: 'another', again: 'again'})
    mirrarray([1, 2, 3, 4])
      .should
      .eql({'1': 1, '2': 2, '3': 3, '4': 4})
  })
  it ('should throw invalid element contained within input array', () => {
    (() => mirrarray([true, 1])).should.throw();
    (() => mirrarray([{test: 'test'}, 1])).should.throw();
  })
})