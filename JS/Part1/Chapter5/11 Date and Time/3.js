function getLocalDay(date) {
  return date.getDay() == 0 ? 7 : date.getDay();
}

/*
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}
*/
