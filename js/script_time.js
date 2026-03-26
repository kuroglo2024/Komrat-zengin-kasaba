function getNight() {
    //document.body.style.color = "#3c434a";
}
function getMorning() {
    //document.body.style.color = "teal";
}
function getEvening() {
    //document.body.style.color = "white";
}
var myTime = new Date().getHours();
if((myTime<=7) || (myTime>=21)) {
    getNight();
} else if ((myTime>=8) && (myTime<15)) {
    getMorning()
} else {
    getEvening();
}
setInterval(function() {getMyDates()},1000);
function getMyDates() {
    var myDay, myDate = new Date();
    switch (myDate.getDay()) {
    case 0:    myDay = "Воскресенье"; 
                break;
    case 1:    myDay = "Понедельник"; 
                break;
    case 2:    myDay = "Вторник"; 
                break;
    case 3:    myDay = "Среда"; 
                break;
    case 4:    myDay = "Четверг"; 
                break;
    case 5:    myDay = "Пятница"; 
                break;
    case 6:    myDay = "Суббота"; 
                break;
    }
    var myHour = myDate.getHours(), myDateNmbr = myDate.getDate(), myMonth = myDate.getMonth()+1, myMinutes = myDate.getMinutes(), mySeconds = myDate.getSeconds();
    //когда минута меньше 10 - конкатенирую 0 впереди
    myHour = (myHour > 9) ? myHour : '0' + myHour;
    myMinutes = (myMinutes > 9) ? myMinutes : '0' + myMinutes;
    mySeconds = (mySeconds > 9) ? mySeconds : '0' + mySeconds;
    myDateNmbr = (myDateNmbr > 9) ? myDateNmbr : '0' + myDateNmbr;
    myMonth = (myMonth > 9) ? myMonth : '0' + myMonth;
    document.getElementById("result").innerHTML = "<h3 class='light'>" + myDay + ", " + myDateNmbr +"/" + myMonth + "/" + new Date().getFullYear() + ", " + myHour + ":" + myMinutes + ":" + mySeconds +"</h3>";
}        