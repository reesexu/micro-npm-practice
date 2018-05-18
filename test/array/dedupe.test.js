const dedupe = require('../../packages/array/dedupe')
const should = require('should')
describe('dedupe', () => {
  it ('sholud remove duplicates', () => {
    dedupe([1, 1, 2, 3, 4, 5, 6]).should.eql([1, 2, 3, 4, 5, 6])
  })
  it('should remove multiple duplicates', () => {
    dedupe([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6]).should.eql([1, 2, 3, 4, 5, 6])
  })
  it('should remove duplicates of complex values', () => {
    dedupe([{a: 1}, {a: 2}, {a: 3}, {a: 3}]).should.eql([{a: 1}, {a: 2}, {a: 3}])
  })
  it('should remove duplicates of complex values when using a custom hasher', () => {
    dedupe([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}], value => value.a).should.eql([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}])
  })
})