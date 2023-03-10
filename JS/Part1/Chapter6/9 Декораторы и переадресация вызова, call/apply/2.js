function delay(f, ms) {

  return function(...args) {
    let savedThis = this;
    setTimeout(function() {
      f.apply(savedThis, args);
    }, ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test");