module.exports = (array, size) => {
    if (!Array.isArray(array)) {
        throw new Error('the first arg should be array')
    }
    if (typeof size !== 'number' || size < 0) {
        throw new Error('the second arg should be a number and greater than zero')
    }
    let arr = []
    while (array.length > 0) {
        arr.push(array.splice(0, size))
    }
    return arr
}