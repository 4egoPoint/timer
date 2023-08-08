let Itlerval = setInterval(() => {
   const countDownDate = new Date();

   let days = countDownDate.getDay()
   let hours = countDownDate.getHours()
   let minutes = countDownDate.getMinutes()
   let seconds = countDownDate.getSeconds()



   setTimeInsideJS(days, hours, minutes, seconds,)

},1000);

function setTimeInsideJS(days, hours, minutes, seconds,){
   document.getElementById('days').innerHTML = days;
   document.getElementById('hours').innerHTML = hours;
   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('seconds').innerHTML = seconds;
}