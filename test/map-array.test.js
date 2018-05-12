const should = require('should')
const mapArray = require('../packages/map-array')
describe('map-array', () => {
  it('should return an array with the obj key & value', () => {
    const obj = {
      name: 'Giorgio',
      surname: 'Bianchi'
    }
    mapArray(obj, (key, value) => `${key} ${value}`)
      .should
      .eql(['name Giorgio', 'surname Bianchi'])
  })
})