const textInput = document.getElementById('text-input')
const messageDisplay = document.getElementById('message')
const leftEmoji = document.getElementById('left-emoji')
const rightEmoji = document.getElementById('right-emoji')

const leftEmojiSelect = document.getElementById('left-emoji-select')
const rightEmojiSelect = document.getElementById('right-emoji-select')

leftEmojiSelect.addEventListener('change', (e) => changeEmoji(e, leftEmoji))
rightEmojiSelect.addEventListener('change', (e) => changeEmoji(e, rightEmoji))

textInput.addEventListener('input', updateMessage)

function updateMessage(e) {
  messageDisplay.textContent = e.target.value.trim()
}

function changeEmoji(e, emojiDisplay) {
  emojiDisplay.textContent = e.target.value
}

// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
