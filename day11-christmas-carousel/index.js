const previous = document.getElementById('previous')
const next = document.getElementById('next')
const img = document.getElementById('img')

previous.addEventListener('click', previousImage)
next.addEventListener('click', nextImage)

const imgs = [
  {
    src: 'imgs/village.jpg',
    alt: 'christmas village at night with snow and christmas tree',
  },
  {
    src: 'imgs/present.jpg',
    alt: 'white and gold wrapped present on white table with snowflake decorations',
  },
  {
    src: 'imgs/doggies.jpg',
    alt: 'small black dog and small beige dog looking out the window at snow next to Christmas wreath',
  },
  {
    src: 'imgs/vintage.jpg',
    alt: 'an assortment of Christmas decorations and vintage Christmas cards',
  },
]

let imgNum = 0

function previousImage() {
  imgNum--
  if (imgNum === -1) {
    imgNum = imgs.length - 1
  }

  img.src = imgs[imgNum].src
  img.alt = imgs[imgNum].alt
}

function nextImage() {
  imgNum++
  if (imgNum === imgs.length) {
    imgNum = 0
  }

  img.src = imgs[imgNum].src
  img.alt = imgs[imgNum].alt
}

// Task:
// - Wire up the buttons to switch through the images in the imgs array.
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.
