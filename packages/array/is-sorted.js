function defaultComparator(a, b) {
  return a - b
}
module.exports = (array, comparator = defaultComparator) => {
  for (let i = 1, length = array.length; i < length; i++) {
    if (comparator(array[i - 1], array[i]) > 0) 
      return false
  }
  return true
}