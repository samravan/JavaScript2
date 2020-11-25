const arrowUp = document.querySelector('.fa-arrow-up');
const arrowDown = document.querySelector('.fa-arrow-down');
const pomodoroTimer = document.querySelector('.timer')
const startTime = document.querySelector('.start-time');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const stopBtn = document.querySelector('.fa-stop');
const minutesTimer = document.querySelector('.minutes');
const secondsTimer = document.querySelector('.seconds');


// START
playBtn.addEventListener('click', () => {
    toggleClock();
  })
  
  // PAUSE
  pauseBtn.addEventListener('click', () => {
    toggleClock();
  })
  
  // STOP
  stopBtn.addEventListener('click', () => {
    toggleClock(true);
  })

  let isClockRunning = false;

  // in seconds = 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;

// in seconds = 5 mins;
let breakSessionDuration = 300;


const toggleClock = reset => {
    if (reset) {
      // STOP THE TIMER
      stopClock()
    } else {
      if (isClockRunning === true) {
        // PAUSE THE TIMER
        clearInterval(clockTimer);
        isClockRunning = false;
      } else {
        // START THE TIMER
        
        isClockRunning = true;
        clockTimer = setInterval(() => {
            currentTimeLeftInSession--
            displayCurrentTimeLeftInSession();
        }, 1000);
      }
    }
  }

  
    const displayCurrentTimeLeftInSession = () => {
        const secondsLeft = currentTimeLeftInSession
        let result = ''
        const seconds = secondsLeft % 60
        const minutes = parseInt(secondsLeft / 60) % 60
        let hours = parseInt(secondsLeft / 3600)
        // add leading zeroes if it's less than 10
        function addLeadingZeroes(time) {
          return time < 10 ? `0${time}` : time
        }
        if (hours > 0) result += `${hours}:`
        result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
        pomodoroTimer.innerText = result.toString()
      }

      const stopClock = () => {
        // 1) reset the timer we set
        clearInterval(clockTimer)
        // 2) update our variable to know that the timer is stopped
        isClockRunning = false
        // reset the time left in the session to its original state
        currentTimeLeftInSession = workSessionDuration
        // update the timer displayed
        displayCurrentTimeLeftInSession()
      }
  