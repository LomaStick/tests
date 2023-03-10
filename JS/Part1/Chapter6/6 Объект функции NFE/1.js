function makeCounter() {
  let count = 0;

  function counter(){
    return count++;
    
  }
  counter.set = function set(value){
    count = value ;
  } 

  counter.decrease = function decrease(){
    count --;
  }

  return counter;
}