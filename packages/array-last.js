const isNumber = require('is-number')
module.exports = (array, count = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('array-last expexts an array as the firtst arguments')
  }
  const {length} = array
  const num = isNumber(count) ? count : 1
  if (length === 0) 
    return null
  return (length > 1 && count > 1)
    ? array.slice(length - count)
    : array[length - 1]
}