function setPageTime() {
var currentDateObj = document.getElementById('current-date');
if (currentDateObj) {
    var monthList = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 
        'августа', 'сентября', 'октября', 'ноября', 'декабря');
    var currDate = new Date();
    var m = monthList[currDate.getMonth()];
    var s = check_zero(currDate.getDate()) + ' ' + m + ' ' + Math.round(currDate.getFullYear()%1000) + ' ' +
        check_zero(currDate.getHours()) + ':' + check_zero(currDate.getMinutes()) + ':' + 
        check_zero(currDate.getSeconds());
    currentDateObj.innerHTML = s;
}
setTimeout('setPageTime(1000)');