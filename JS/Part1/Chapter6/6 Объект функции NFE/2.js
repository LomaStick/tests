function sum(a) {

  let currentSum = a;
  function add (b){
    currentSum += b;
    return add;
  }

  add.toString = function (){
    return currentSum;
  }

  return add
}
