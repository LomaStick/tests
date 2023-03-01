function sumInput() {
  let values = [];
  while (true) {
    x = prompt('Введите число', '');
    if (x === '' || x === null || !isFinite(x)) break;
    values.push(+x);
  }
  let sumValues = 0;
  for (let i of values){
    sumValues += i; 
  }
  return sumValues;
}
