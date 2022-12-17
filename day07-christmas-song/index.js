const playBtn = document.getElementById('play-btn')
const pauseBtn = document.getElementById('pause-btn')
const stopBtn = document.getElementById('stop-btn')
const volumeSlider = document.getElementById('volume-slider')

const xmasAudio = new Audio('./fire-and-ice.mp3')

playBtn.addEventListener('click', () => xmasAudio.play())
pauseBtn.addEventListener('click', () => xmasAudio.pause())
stopBtn.addEventListener('click', () => {
  xmasAudio.pause()
  xmasAudio.currentTime = 0
})

volumeSlider.addEventListener('change', (event) => {
  xmasAudio.volume = event.target.value
})

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
