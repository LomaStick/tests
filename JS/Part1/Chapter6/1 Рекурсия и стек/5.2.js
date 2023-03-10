let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let tmp = list;

  while (tmp.next) {
    printReverseList(tmp.next)
  }
  alert (tmp.value)
}

printReverseList(list);