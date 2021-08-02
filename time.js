const time = document.querySelector('#time')

let clockTick = setInterval(function(){
let currentDate = new Date()
let hours = currentDate.getHours()
let minutes = currentDate.getMinutes()
let amPm = hours >= 12 ? 'PM' : 'AM'
hours = hours % 12
hours = hours ? hours: 12
minutes = minutes < 10 ? '0' + minutes: minutes


let currentTime = hours + ":" + minutes + ' ' + amPm

time.innerHTML = currentTime

}, 1000)


