let sound = new Audio("sound of alarm.mp3")
let interval;
let alarm = document.querySelector(".alarm")
let clock = document.querySelector(".clock");
let timer = document.querySelector(".timer");
let stopwatch = document.querySelector(".stopwatch")
function updateTime() {
  let timeInput = document.querySelector(".time p");
  let dayInput = document.querySelector(".day");
  timeInput.innerHTML = moment().format("HH:mm:ss");
  dayInput.innerHTML = moment().format("DD MMMM YYYY");
}

setInterval(updateTime, 1000);
console.log(moment().format("DD MMMM YYYY"));
let showTimerBtn = document.querySelector(".show-timer");
showTimerBtn.onclick = function () {
  clock.classList.add("d-none");
  
  timer.classList.remove("d-none");
  alarm.classList.add("d-none")
  stopwatch.classList.add("d-none")
};

let timerStartBtn = document.querySelector(".timer-start");
let timerStopBtn = document.querySelector(".timer-stop");
timerStartBtn.onclick = function () {
  timerStartBtn.classList.add("d-none");
  timerStopBtn.classList.remove("d-none");
  stopwatch.classList.add("d-none")
  interval = setInterval(startTimer, 1000);
};

timerStopBtn.onclick = function () {
  timerStartBtn.classList.remove("d-none");
  timerStopBtn.classList.add("d-none");
  let timerInput = document.querySelector(".display");
  timerInput.value = 0;
  clearInterval(interval);
};

let showTimeBtn = document.querySelector(".show-time");
showTimeBtn.onclick = function () {
  timer.classList.add("d-none");
  clock.classList.remove("d-none");
  alarm.classList.add("d-none")
  stopwatch.classList.add("d-none")
};

function startTimer() {
  let timerInput = document.querySelector(".display");
  if (timerInput.value > 0) {
    timerInput.value--;
  }
}

let showAlarmBtn = document.querySelector(".show-alarm")
showAlarmBtn.onclick = function() {
    alarm.classList.remove("d-none")
    timer.classList.add("d-none")
    clock.classList.add("d-none")
    stopwatch.classList.add("d-none")
}
setInterval(alarmFunction, 1000*60)
function alarmFunction() {
  let now = moment().format('HH:mm')
  let alarmInput =  document.querySelector(".alarm-input")
  console.log(alarmInput.value);
  if(alarmInput.value == now ) {
    sound.play()

  }

}
let showStopWatchBtn = document.querySelector(".show-stopwatch")
showStopWatchBtn.onclick = function() {
  alarm.classList.add("d-none")
    timer.classList.add("d-none")
    clock.classList.add("d-none")
    stopwatch.classList.remove("d-none")
}

let startStopWatchBtn = document.querySelector(".start-stopwatch")
let stopStopWatchBtn = document.querySelector(".stop-stopwatch")
let minute = 0
let seconds = 0
let secDisplay = document.querySelector(".sec")
let minDisplay = document.querySelector(".min")
startStopWatchBtn.onclick = function() {
  let = stopWatchInterval = setInterval(startStopWatch, 1000)
  startStopWatchBtn.disabled = true 
}
function startStopWatch() {
  seconds ++
  
  if(seconds == 60) {
    minute ++
    seconds = 0
    minDisplay.textContent = minute
  }
  secDisplay.textContent = seconds
}
stopStopWatchBtn.onclick = function() {
  clearInterval(stopWatchInterval)
  seconds = 0
  minute = 0
  minDisplay.textContent = "00"
  secDisplay.textContent = "00"
  startStopWatchBtn.disabled = false
}