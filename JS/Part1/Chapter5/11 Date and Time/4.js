function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

/*
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
*/