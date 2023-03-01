function randomInteger(min, max){
  let r = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(r);
}