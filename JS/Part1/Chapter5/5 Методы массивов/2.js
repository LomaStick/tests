function filterRange(arr, a, b) {
  let result = [];
  for (let i of arr) {
    if (i >= a && i <= b) {
      result.push(i)
    }
    return result
  }
}