const clock = document.getElementById('clock');

function updateDate() {
  const Now = new Date ();

let Hours = Now.getHours();
let Minutes = Now.getMinutes();
let Seconds = Now.getSeconds();

Hours = Hours < 10 ? "0" + Hours : Hours;
Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
Seconds = Seconds < 10 ? "0" + Seconds : Seconds;

const TimeString = `${Hours} : ${Minutes} : ${Seconds}`
clock.textContent = TimeString;
}

updateDate()
setInterval(updateDate,1000)