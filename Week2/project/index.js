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
const timerText = document.querySelector('.timer');
const playBtn = document.querySelector('.fa-play');
const stopBtn = document.querySelector('.fa-stop')
const pauseBtn = document.querySelector('.fa-pause');
let minutesTimer = document.querySelector('.minutes');
let secondsTimer = document.querySelector('.seconds');
const dots = document.querySelector('.dots')


let intialTime = 25;

arrowUp.addEventListener('click', addMinute);
arrowDown.addEventListener('click', minusMinute);
playBtn.addEventListener('click', counterRun);
stopBtn.addEventListener('click', stopTimer)

let counterStart;
function counterRun() {
  pauseBtn.addEventListener('click', counterPause);
  stopBtn.removeEventListener('click', stopTimer);
  playBtn.removeEventListener('click', counterRun)
  counterStart = setInterval(timer, 1000);

  function counterPause() {
    clearInterval(counterStart);
    playBtn.addEventListener('click', counterRun);
    stopBtn.addEventListener('click', stopTimer)
    
  }

  };

  


  function stopTimer(){
    
    minutesTimer.innerHTML = "25";
    dots.textContent = ":";
    secondsTimer.innerHTML = '00';
    startTime.textContent = 25;
    intialTime = 25
    clearInterval(counterStart);
    playBtn.addEventListener('click', counterRun);
    arrowUp.addEventListener('click', addMinute);
    arrowDown.addEventListener('click', minusMinute);

  }


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
    intialTime = 60;
  };
  
};

function timer() {
  arrowUp.removeEventListener('click', addMinute);
  arrowDown.removeEventListener('click', minusMinute);
  if (secondsTimer.textContent != 0){
    secondsTimer.textContent--;
  } else if (minutesTimer.textContent != 0 && secondsTimer.textContent == 0){
    secondsTimer.textContent = 59;
    minutesTimer.textContent--;
    
  } else {
    minutesTimer.textContent = "Time's Up!";
    secondsTimer.textContent = "";
    dots.textContent = "";
  
    
    stopBtn.addEventListener('click', stopTimer);
    clearInterval(counterStart);
    

  }
  
 
}








 