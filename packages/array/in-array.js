module.exports = (array, val) => {
  let isExit = false
  if (Array.isArray(array)) {
    for (let i = 0, length = array.length; i < length; i++) {
      if (array[i] === val) {
        isExit = true
        break
      }
    }
  }
  return isExit
}