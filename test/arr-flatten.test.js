const fatten = require('../packages/arr-flatten')
const should = require('should')
describe('arr-flatten', () => {
  it ('should flatten nested array', () => {
    fatten.arrayFlatten(['a', 'b', ['c'], 'd', ['e']]).should.eql(['a', 'b', 'c', 'd', 'e'])
    fatten.flattten(['a', 'b', ['c'], 'd', ['e']]).should.eql(['a', 'b', 'c', 'd', 'e'])
  })
   it('should flatten deeply nested arrays:', function() {
    fatten.arrayFlatten(['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]]).should.eql(['a', 'b', 'c', 'd', 'e'])
    fatten.arrayFlatten(['a', 'b', ['c'], 'd', ['e']]).should.eql(['a', 'b', 'c', 'd', 'e'])
    fatten.flattten(['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]]).should.eql(['a', 'b', 'c', 'd', 'e'])
    fatten.flattten(['a', 'b', ['c'], 'd', ['e']]).should.eql(['a', 'b', 'c', 'd', 'e'])
  })
})