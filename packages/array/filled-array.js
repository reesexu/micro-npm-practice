module.exports = (item, count) => {
  if (typeof count !== 'number' || count < 0) {
    throw new Error('the second argument of filled-array should be positive integer')
  }
  let array = new Array(count)
  // 检测是否原生带有fill方法,若有则优先使用原生方法
  if (typeof array.fill == 'function') {
    return array.fill(item)
  }
  for (let i = 0; i < count; i++) {
    array[i] = item
  }
  return array
}