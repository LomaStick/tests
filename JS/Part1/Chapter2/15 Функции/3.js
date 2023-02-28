function pow(x, n) {
  let result = 1;
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    for (let i = 1; i <= n; i++) {
      result *= x;
    }
    return result
  } else {
    return "Error"
  }
}
