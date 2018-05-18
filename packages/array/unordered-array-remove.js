module.exports = (array, index) => {
  // 防止数组越界
  if (index >= array.length || index < 0) return
  let last = array.pop()
  // 如果不是最后一个则将最后的元素替换要删除的对应index下的元素,从而实现删除对应index的元素
  if (index < array.length) {
    let tem = array[index]
    array[index] = last
    return tem
  }
  return last
}