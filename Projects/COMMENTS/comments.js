// FORM -----------------------------------------------------------------------
// < PARAM > // 
const appForm = document.forms.commentsForm;
let commentIdNumber = 0;

// < ACTIONS > // 
appForm.addEventListener('submit', handleFormSubmit)

appForm.addEventListener("focusin", handleFormFocusin)

appForm.formTextarea.addEventListener("keydown", (e) => {
  // << Textarea autosize
  appForm.formTextarea.style.height = `auto`;
  let scrollHeight = e.target.scrollHeight;
  appForm.formTextarea.style.height = `${scrollHeight}px`;

  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    appForm.formBtn.click();
  }
})

appForm.formUserImput.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.keyCode == '13') {
    e.preventDefault();
  }
})

// < FUNCTIONS > // -------------------------
async function handleFormSubmit(e) {
  // << PARAM >> //
  // << ACTIONS >> // 
  e.preventDefault()
  e.target.focus()

  if (!testsForm()) return;

  const data = new FormData(e.target)
  // console.log(Array.from(data.entries()))

  // const response = await sendData(data)
  // console.log(response.status, response.statusText)

  drawcomment(
    appForm.formUserImput.value,
    appForm.formTextarea.value,
    appForm.formDate.value
  );
  e.target.reset();

  // << FUNCTIONS >> // ------------------------
  async function sendData(data) {
    return await fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
  }
  // << ----------------------------------------
  function testsForm() {
    // <<< PARAM >>> //
    testsForm.value = true;

    // <<< ACTIONS >>> //
    updateError();

    if (!testUserName(appForm.formUserImput.value)) {
      drawError(appForm.formUserImput)
      testsForm.value = false;
    }

    if (!testTextarea(appForm.formTextarea.value)) {
      drawError(appForm.formTextarea)
      testsForm.value = false;
    }

    if (!testDate(appForm.formDate.value)){
      drawError(appForm.formDate)
      testsForm.value = false;
    }

    return testsForm.value;

    // <<< FUNCTIONS >>> // -----------------------
    function updateError() {
      // <<<< PARAM >>>> //
      let Error = document.querySelectorAll('.comments-form__error')

      // <<<< ACTIONS >>>> //
      if (Error != null) {
        for (let i = 0; i < Error.length; i++) {
          Error[i].remove();
        }
      }
    }

    // <<< ----------------------------------------
    function drawError(element) {
      element.insertAdjacentHTML(
        "afterend",
        `<div class = "comments-form__error">
          ${testsForm.ErrorString}
        </div>`
      );
    }

    // <<< ----------------------------------------
    function testUserName(input) {
      if (!input) {
        testsForm.ErrorString = 'Обязательное поле для заполнения';
        return false;
      }
      if (parseInt(input.substr(0, 1))) {
        testsForm.ErrorString = 'Имя должно начинаться с буквы';
        return false;
      }
      if (!/^\w+$/.test(input)) {
        testsForm.ErrorString = 'Используйте только латинские буквы и цифры';
        return false;
      }
      if (input.length < 4 || input.length > 16) {
        testsForm.ErrorString = 'Имя должно содержать от 4 до 16 символов';
        return false;
      }
      return true;
    }

    // <<< ----------------------------------------
    function testTextarea(textarea) {
      if (!textarea) {
        testsForm.ErrorString = 'Обязательное поле для заполнения';
        return false;
      }
      return true;
    }

    // <<< ----------------------------------------
    function testDate(date){
      // <<<< PARAM >>>> //
      let nowDate = new Date();
      let nowDay = nowDate.getDate();
      let nowMounth = nowDate.getMonth() + 1;
      let nowYear = nowDate.getFullYear();
      // <<<< ACTIONS >>>> //
      date = date.split('-')
      if (date[0] > nowYear){
        testsForm.ErrorString = 'Дата больше текущей';
        return false;
      }
      else{
        if (date[1] > nowMounth){
          testsForm.ErrorString = 'Дата больше текущей';
          return false;
        }
        else{
          if(date[2] > nowDay){
            testsForm.ErrorString = 'Дата больше текущей';
            return false
          }
        }
      }
      return true;
    }
  }
  // << ----------------------------------------
  function drawcomment(userName, text, date) {
    // <<< PARAM >>> // 
    const commentWrapper = document.querySelector('.comments__items-wrapper')

    // <<< ACTIONS >>> // 
    text = text.replace(/\n/gi, '<br/>');
    date = formatDate(date);


    commentWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="comments__items comments-item" id="comment-${commentIdNumber}">
          <div class="comments-item__header">
            <h6 class="comments-item__userName">${userName}</h6>
            <button type="button" class="comments-item__cross _icon-cross"></button>
          </div>
          <p class="comments-item__text">${text}</p>
          <div class="comments-item__footer">
            <p class="comments-item__time">${date}</p>
            <button type="button" class="comments-item__like _icon-like"></button>
          </div>
        </div>`
    )
    commentIdNumber++;

    // <<< FUNCTIONS >>> // -----------------------
    function formatDate(date) {
      // <<<< PARAM >>>> //
      let nowDate = new Date();
      
      let nowDay = nowDate.getDate();
      if (nowDay < 10) nowDay = '0' + nowDay;
    
      let nowMounth = nowDate.getMonth() + 1;
      if (nowMounth < 10) nowMounth = '0' + nowMounth;
    
      let nowYear = nowDate.getFullYear() % 100;
      if (nowYear < 10) nowYear = '0' + nowYear;

      let nowHourse = nowDate.getHours();
      if (nowHourse < 10) nowHourse = '0' + nowHourse;

      let nowMinutes = nowDate.getMinutes();
      if (nowMinutes < 10) nowMinutes = '0' + nowMinutes;

      // <<<< ACTION >>>> //
      date = !date ? null : date.split('-');

      if (date != null){
        let day = date[2];
        let mounth = date[1];
        let year = date[0] % 100;
        if (year < 10) year = '0' + year;
        if (year == nowYear && mounth == nowMounth){
          if (day == nowDay) return 'сегодня,' + ' ' + nowHourse + ':' + nowMinutes;
          if (day == nowDay - 1) return 'вчера,' + ' ' + '18'+ ':' + '39';
        }
        return day + '.' + mounth + '.' + year + ', ' + '18'+ ':' + '39';
      }

      return 'сегодня,' + ' ' + nowHourse + ':' + nowMinutes;
    }
  }
}
// < ----------------------------------------
function handleFormFocusin(e) {
  // << PARAM >> //
  targetElement = e.target;

  //  << ACTIONS >> //
  removeError(targetElement);

  // << FUNCTIONS >> // ------------------------
  function removeError(e) {
    if (e.nextElementSibling && e.nextElementSibling.classList.value === "comments-form__error") {
      e.nextElementSibling.remove();
    }
  };
}
// FORM END -------------------------------------------------------------------

// COMMENT --------------------------------------------------------------------
// < PARAM > //
const commentWrapper = document.querySelector('.comments__items-wrapper')

// < ACTIONS > //
commentWrapper.addEventListener('click', (e)=>{
    // << PARAM >> //
    const targetElement = e.target
    let commentsItem = targetElement;
    // << ACTIONS >> //
    if (targetElement.classList.contains('comments-item__cross')){
      while (!commentsItem.classList.contains('comments__items')){
        commentsItem = commentsItem.parentNode;
      }
      document.getElementById(commentsItem.id).remove()
    }
    
    
    if (targetElement.classList.contains('comments-item__like')){
      targetElement.classList.toggle('comments-item__like_active')
    }
  })
// < FUNCTIONS> //
// COMMENT END ----------------------------------------------------------------