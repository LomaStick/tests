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

function printList(list) {
  let tmp = list

  while (tmp){
    alert(tmp.value)
    printList(tmp.next)
  }
}

printList(list);