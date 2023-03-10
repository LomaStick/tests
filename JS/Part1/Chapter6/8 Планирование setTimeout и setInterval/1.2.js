function printNumbers(from, to) {
  let count = from;

  function iteration() {
    alert(count);
    if (count == to) {
      clearInterval(timerId);
    }
    count++;
  }

  iteration();
  let timerId = setInterval(iteration, 1000);
}