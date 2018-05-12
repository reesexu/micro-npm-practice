module.exports = (obj, fun) => {
  let arr = []
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    arr[i] = fun(keys[i], obj[keys[i]])
  }
  return arr
}