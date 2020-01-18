
var lastUpdate = new Date();
var copyRightYear= new Date();
window.onload = function(){
    loadYear();
    function loadYear(){
    document.getElementById('copyRightYear').innerHTML=copyRightYear.getFullYear();
    document.getElementById('currentDate').innerHTML=lastUpdate;
    }
}
