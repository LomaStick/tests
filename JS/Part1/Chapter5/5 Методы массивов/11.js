
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users){
  let AvAge = 0;
  for (let user of users) {
    AvAge += +user.age;
  }
  AvAge = AvAge / users.length;
  return AvAge;
}

/*
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
*/