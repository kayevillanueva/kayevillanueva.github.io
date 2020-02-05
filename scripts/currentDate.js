
var lastUpdate = new Date();
var copyRightYear= new Date();
var monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = lastUpdate.getDate();
var dayIndex = lastUpdate.getDay();
var monthIndex = lastUpdate.getMonth();
var year = lastUpdate.getFullYear();
window.onload = function(){
    loadYear();

    function loadYear(){
    document.getElementById('copyRightYear').innerHTML = copyRightYear.getFullYear();
    document.getElementById('currentDate').innerHTML = dayNames[dayIndex] + ", " + day + ' ' + monthNames[monthIndex] + ' ' + copyRightYear.getFullYear();

}
}
