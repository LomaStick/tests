let login = prompt ('Введите логин', '');

if (login === 'Админ'){

  let password = prompt ('Введите пароль', '');
  if (password === 'Я главный'){
    alert ('Здраствуйте');
  } 
  else if (password === '' || password === null){
    alert('Отменено');
  }
  else {
    alert ('Я Вас не знаю')
  }
} 
else if (login === '' || login === null){
  alert ('Отменено');
} 
else {
  alert ('Я Вас не знаю')
}