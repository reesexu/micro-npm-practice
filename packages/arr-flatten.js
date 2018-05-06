function arrayFlatten(array) {
  let arr = []
  for (let i = 0, length = array.length; i < length; i++) {
    if (Array.isArray(array[i])) {
      arr = arr.concat(arrayFlatten(array[i]))
    } else {
      arr.push(array[i])
    }
  }
  return arr
}
function flattten(array) {
  return flat(array, [])
}
function flat (array, res) {
  for (var i = 0, length = array.length; i < length; i++) {
    Array.isArray(array[i]) ? flat(array[i], res) : res.push(array[i])
    
  }
  return res
}
module.exports = {
  arrayFlatten,
  flattten
}