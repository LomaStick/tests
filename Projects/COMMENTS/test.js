const appForm = document.forms.commentsForm;
appForm.addEventListener('submit', handleFormSubmit)
console.log(appForm.formUserImput)

async function handleFormSubmit(e) {
  e.preventDefault()

  if (testsForm(appForm)){
    const data = new FormData(e.target)
    console.log(Array.from(data.entries()))
  
    // const response = await sendData(data)
    // console.log(response.status, response.statusText)
  }
}
async function sendData(data) {
  return await fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}

function testsForm(appform){
  appform.tests = true;
  // updateError();
  
  if (!testUserInput(appForm.formUserImput)){
    drawError (appForm.formUserImput, testsForm.errorText)
  };
  
  return appform.tests;  
}

function updateError(){
  let error = document.querySelectorAll('.comments-form__error')
  if (error != null) {
    for( let i = 0; i < Error.length; i++ ){
      error[i].remove();
    }
  }
}

function testUserInput(userInput){
  const value = userInput.value;
  if (!value) {
    userInput.errorText = 'Обязательное поле для заполнения';
    return true;
  }
  if (parseInt(value.substr(0, 1))) {
    userInput.errorText = 'Имя должно начинаться с буквы';
    return true;
  }
  if (!/^[a-zA-Z1-9]/.test(value)) {
    userInput.errorText = 'Используйте только латинские буквы и цифры';
    return true;
  }
  if (userInput.length < 8 || userInput.length > 16) {
    userInput.errorText = 'Имя должно содержать от 8 до 16 символов';
    return true;
  }
  drawError (userInput, userInput.errorText)
}

function drawError(formElement, errorText){
  formElement.insertAdjacentHTML(
    "afterend",
    `<div class = "comments-form__error">
      ${errorText}
    </div>`
  )
}