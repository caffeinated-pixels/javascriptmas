const greetingDisplay = document.getElementById('greeting-display')
const btn = document.getElementById('btn')
const senderDisplay = document.getElementById('sender')
const recipientDisplay = document.getElementById('recipient')

const senderInput = document.getElementById('sender-field')
const recipientInput = document.getElementById('recipient-field')
btn.addEventListener('click', writeGreeting)

const greetings = [
  'Santa Claus is coming to town!',
  'We wish you a Merry Christmas!',
  'Happy holidays!',
  'Ho, ho, ho! Merry Christmas!',
  'Jingle all the way!',
]

function writeGreeting() {
  const randomIndex = Math.floor(Math.random() * greetings.length)
  greetingDisplay.textContent = greetings[randomIndex]
  recipientDisplay.textContent = `To: ${recipientInput.value}`
  senderDisplay.textContent = `From: ${senderInput.value}`
}

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.
