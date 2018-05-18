const isNumber = (num) => typeof num === 'number'
module.exports = (start, end) => {
  if (isNumber(start) && !isNumber(end)) {
    end = start
    start = 0
  } else if (!isNumber(start) && !isNumber(end)) {
    start = 0
    end = 0
  }
  // 单竖杠|, 就是转换为2进制之后相加得到的结果,所以“|0”能够实现取整
  start = start | 0
  end = end | 0
  const length = end - start
  if (length < 0)
    throw new Error('array length must be positive')
  let array = new Array(length)
  for (let i = 0, j = start; i < length; i++, j++) {
    array[i] = j
  }
  return array
}