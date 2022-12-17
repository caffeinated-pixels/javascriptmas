const greeting = document.getElementById('greeting')
const btn = document.getElementById('btn')

let isScaryTheme = true

const scaryTheme = {
  fontFamily: 'Rubik Beastly',
  message: '🎃 Scary Christmas! 👻',
  imageURL: `url('./images/scary-skeletons.jpg')`,
  btnText: 'unscare me!',
}
const xmasTheme = {
  fontFamily: 'Mountains of Christmas',
  message: '🎅 Merry Christmas! 🎄',
  imageURL: `url('./images/christmas.jpg')`,
  btnText: 'scare me!',
}

btn.addEventListener('click', changeTheme)

function changeTheme() {
  greeting.style.fontFamily = isScaryTheme
    ? xmasTheme.fontFamily
    : scaryTheme.fontFamily

  greeting.textContent = isScaryTheme ? xmasTheme.message : scaryTheme.message
  btn.textContent = isScaryTheme ? xmasTheme.btnText : scaryTheme.btnText
  document.body.style.backgroundImage = isScaryTheme
    ? xmasTheme.imageURL
    : scaryTheme.imageURL

  isScaryTheme = !isScaryTheme
}

// function changeTheme() {
//   greeting.style.fontFamily = 'Mountains of Christmas'
//   greeting.textContent = '🎅 Merry Christmas! 🎄'
//   document.body.style.backgroundImage = `url('./images/christmas.jpg')`
// }

// Task:
// - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
// - Run the function when the Fix button is clicked.

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
