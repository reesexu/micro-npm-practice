module.exports = (array, index1, index2) => {
  if (!Array.isArray(array)) {
    throw new Error('the first arguments of swap-array should be array')
  }
  const arr = Array.from(array)
  arr[index2] = arr.splice(index1, 1, arr[index2])[0]
  return arr
}