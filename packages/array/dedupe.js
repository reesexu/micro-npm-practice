module.exports = (array, hasher = JSON.stringify) => {
  let tempObj = {}
  let tempArray = []
  for (var i = 0, length = array.length; i < length; i++) {
    const comparator = hasher(array[i])
    if (!tempObj[comparator]) {
      tempObj[comparator] = true
      tempArray.push(array[i])
    }
  }
  return tempArray
}