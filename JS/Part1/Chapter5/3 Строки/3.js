function truncate(str, maxlength){
  if (maxlength < str.length) {
    str.slice(0, maxlength - 1) + '…';
  }
  return str
}