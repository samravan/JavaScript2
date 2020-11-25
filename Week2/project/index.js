/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

const arrowUp = document.querySelector('.fa-arrow-up');
const arrowDown = document.querySelector('.fa-arrow-down');
const startTime = document.querySelector('.start-time');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const minutesTimer = document.querySelector('.minutes');
const secondsTimer = document.querySelector('.seconds');

let intialTime = 25;
function addMinute() {
 intialTime++; 
  startTime.innerHTML = intialTime;
  minutesTimer.innerHTML = intialTime;
  if(intialTime == 60) {
    intialTime = 0;
  };
  
  
};

function minusMinute() {
  intialTime--;
  startTime.innerHTML = intialTime;
  minutesTimer.innerHTML = intialTime;
  if(intialTime == 0){
    intialTime = 1;
  };
  
};



let seconds = 60;
function countDownSeconds() {
  seconds--;
  secondsTimer.innerHTML = seconds;
  if (seconds == 0) {
    seconds = 60;
    
  }
};


// let countDown = setInterval(countDownSeconds, 1000)


let minutes = intialTime
function countDownMinutes() {
  minutes--
  minutesTimer.innerHTML = minutes;
  if (minutes === 0){
  clearInterval(counterRun)
    
  };
};
// let clockTimer = setInterval(countDownMinutes, 60000)
let isClockRunning = false;

function counterRun() {
  setInterval(countDownSeconds, 1000);
  setInterval(countDownMinutes, 60000);

  };


// START
playBtn.addEventListener('click', () => {
 counterRun();

})

// PAUSE
// pauseBtn.addEventListener('click', () => {
//   toggleClock();
// })

// // STOP
// stopBtn.addEventListener('click', () => {
//   toggleClock(true);
// })





// const toggleClock = (reset) => {
//   if (reset) {
//     // STOP THE TIMER
//   } else {
//     if (isClockRunning === true) {
//       // PAUSE THE TIMER
//       isClockRunning = false;
//     } else {
//       // START THE TIMER
//       isClockRunning = true;
//       clockTimer = setInterval(countDownMinutes, 60000)

//     }
//   }
// }

//Event Listener
arrowUp.addEventListener('click', addMinute);
arrowDown.addEventListener('click', minusMinute);
// playBtn.addEventListener('click', countDown);


 