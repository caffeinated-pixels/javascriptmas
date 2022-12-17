const crew = document.getElementById('crew')
const countdownDisplay = document.getElementById('countdown')
const btn = document.getElementById('btn')

btn.addEventListener('click', startFirstAnimation)

function startFirstAnimation() {
  crew.classList.add('animate1')
  const animated = document.querySelector('.animate1')
  animated.addEventListener('animationend', startSecondAnimation)
}

function startSecondAnimation() {
  crew.classList.add('animate2')
  const animated = document.querySelector('.animate1')
  animated.removeEventListener('animationend', startSecondAnimation)
  startCountdown()
}

function startCountdown() {
  let count = 5

  const intervalID = setInterval(() => {
    if (count > 0) {
      count--
      countdownDisplay.textContent = count
    } else {
      countdownDisplay.textContent = 'Lift Off!'
      clearInterval(intervalID)
    }
  }, 1000)

  setTimeout(() => crew.classList.add('animate3'), 5000)
}

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
