const inputs = document.querySelectorAll('.controls input')

inputs.forEach((input) => {
  input.addEventListener('change', changeColor)
})

function changeColor(e) {
  const elementName = e.target.id.match(/^\w+/)[0]

  if (elementName === 'nose') {
    document.querySelector('.nose').style.borderLeftColor = e.target.value
  } else {
    const targetElements = document.querySelectorAll(`.${elementName}`)

    targetElements.forEach(
      (element) => (element.style.backgroundColor = e.target.value)
    )
  }
}

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
