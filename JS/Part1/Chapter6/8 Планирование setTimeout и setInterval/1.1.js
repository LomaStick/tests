function printNumbers(from, to){
  let count = from;

  setTimeout(function iteration(){
    alert (count);
    if (count <= to){
      setTimeout(iteration, 1000);
    }
    count++;
  }) 
}
