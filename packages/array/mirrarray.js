module.exports = (array) => {
  let obj = {}
  if (Array.isArray(array)) {
    // array.forEach(i => {   if (['number', 'string'].indexOf(typeof i) < 0) {
    // throw new Error('invalid element contained within input array')   }   obj[i]
    // = i })
    obj = array.reduce((acc, cur) => {
      if (['number', 'string'].indexOf(typeof cur) < 0) {
        throw new Error('invalid element contained within input array')
      }
      acc[cur] = cur
      return acc
    }, obj)
  }
  return obj
}