const should = require('should')
const unorderedArrayRemove = require('../../packages/array/unordered-array-remove')
describe('unordered-array-remove', () => {
  it ('remove the selected item from array', () => {
    let list = [0, 1, 2]
    unorderedArrayRemove(list, 2)
    list.should.eql([0, 1])
    unorderedArrayRemove(list, 0)
    list.should.eql([1])
    unorderedArrayRemove(list, 0)
    list.should.eql([])
  })
})