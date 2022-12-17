const vegetarian = document.getElementById('vegetarian-input')
const numInput = document.getElementById('num-input')

const btn = document.getElementById('btn')
const food = document.getElementById('food')

btn.addEventListener('click', calculateDinner)

function calculateDinner(e) {
  e.preventDefault()

  if (vegetarian.checked) {
    if (numInput.value < 5) {
      food.textContent = 'nut roast'
    } else if (numInput.value < 10) {
      food.textContent = 'a really big nut roast'
    } else {
      food.textContent = 'going to a restaurant with a good veggie option!'
    }
  }

  if (!vegetarian.checked) {
    if (numInput.value < 5) {
      food.textContent = 'turkey'
    } else if (numInput.value < 10) {
      food.textContent = 'goose'
    } else {
      food.textContent = 'going to a restaurant'
    }
  }
}

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
