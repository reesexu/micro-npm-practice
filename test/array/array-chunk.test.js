const should = require('should')
const arrayChunk = require('../../packages/array/array-chunk')
describe('arrayChunk', () => {
    it ('size smaller than array length', () => {
        arrayChunk([1, 2, 3, 4, 5], 2).should.eql([[1, 2], [3, 4], [5]])
    })
    it('size larger than array length', () => {
        arrayChunk([1, 2, 3, 4, 5], 6).should.eql([[1, 2, 3, 4, 5]])
    })
    it('should error', () => {
        (() => arrayChunk([1, 2, 3, 4, 5], '1')).should.throw();
        (() => arrayChunk(1, 1)).should.throw();
    })
})