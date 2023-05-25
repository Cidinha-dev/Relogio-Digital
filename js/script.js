const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval (()=>{

    let date = new Date();
    let dhour = date.getHours();
    let dMin = date.getMinutes();
    let dSec = date.getSeconds();

    hour.innerHTML=`${formatTime(dhour)}`;
    min.innerHTML=`${formatTime(dMin)}`;
    sec.innerHTML=`${formatTime(dSec)}`;

},1000);

function formatTime(time){
    return time < 10 ? '0'+time : time
}