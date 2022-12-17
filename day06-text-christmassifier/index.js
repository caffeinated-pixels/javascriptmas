const greeting = document.getElementById('greeting')
const christmassifierBtn = document.getElementById('christmassifierBtn')
christmassifierBtn.addEventListener('click', christmassifyName)

const xmasMusic = new Audio('./fire-and-ice.mp3')
xmasMusic.volume = 0.4

function christmassifyName() {
  if (greeting.className === 'christmassified') {
    greeting.className = ''
    christmassifierBtn.textContent = 'Christmassify'
    document.body.className = ''
    xmasMusic.pause()
  } else {
    greeting.className = 'christmassified'
    christmassifierBtn.textContent = 'De-christmassify'
    document.body.className = 'xmas-background'
    xmasMusic.play()
  }
}

// Task:
// - Add christmassify class to greeting.
//- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
