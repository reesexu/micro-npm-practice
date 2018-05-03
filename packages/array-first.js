module.exports = (array, count = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('array-first expects an array as the first argument')
  }
  const length = array.length
  if (length === 0) 
    return null
  return (length > 1 && count > 1)
    ? array.slice(0, count)
    : array[0]
}