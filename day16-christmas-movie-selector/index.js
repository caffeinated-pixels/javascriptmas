const ageSelector = document.getElementById('age-selector')
const genreSelector = document.getElementById('genre-selector')

const randomChoiceBtn = document.getElementById('random-choice')
const suggestedMovie = document.getElementById('suggested-movie')

ageSelector.addEventListener('change', recommendMovie)
genreSelector.addEventListener('change', recommendMovie)

randomChoiceBtn.addEventListener('click', getRandomMovie)

let currentMovie = ''

const moviesArr = [
  {
    name: 'Die Hard',
    age: 'grown ups',
    genre: 'Action',
    imdbUrl: 'https://www.imdb.com/title/tt0095016',
  },
  {
    name: 'Bad Santa',
    age: 'grown ups',
    genre: 'Comedy',
    imdbUrl: 'https://www.imdb.com/title/tt0307987',
  },
  {
    name: 'Scrooged',
    age: 'everyone',
    genre: 'Comedy',
    imdbUrl: 'https://www.imdb.com/title/tt0096061',
  },
  {
    name: 'Merry Christmas Mr. Lawrence',
    age: 'grown ups',
    genre: 'War',
    imdbUrl: 'https://www.imdb.com/title/tt0085933',
  },
  {
    name: 'Raiders of the Lost Ark',
    age: 'everyone',
    genre: 'Action',
    imdbUrl: 'https://www.imdb.com/title/tt0082971/',
  },
  {
    name: "National Lampoon's Christmas Vacation",
    age: 'everyone',
    genre: 'Comedy',
    imdbUrl: 'https://www.imdb.com/title/tt0097958',
  },
  {
    name: "It's a Wonderful Life",
    age: 'everyone',
    genre: 'Drama',
    imdbUrl: 'https://www.imdb.com/title/tt0038650',
  },
  {
    name: "On Her Majesty's Secret Service",
    age: 'everyone',
    genre: 'Romance',
    imdbUrl: 'https://www.imdb.com/title/tt0064757',
  },
  {
    name: "Yogi's First Christmas",
    age: 'everyone',
    genre: 'Family',
    imdbUrl: 'https://www.imdb.com/title/tt0199161',
  },
  {
    name: 'The Happiness of the Katakuris',
    age: 'grown ups',
    genre: 'Family',
    imdbUrl: 'https://www.imdb.com/title/tt0304262/',
  },
  {
    name: 'Hana-Bi',
    age: 'grown ups',
    genre: 'Drama',
    imdbUrl: 'https://www.imdb.com/title/tt0119250/',
  },
]

function recommendMovie(e) {
  if (ageSelector.value && genreSelector.value) {
    const filteredMovies = filterMovies(ageSelector.value, genreSelector.value)
    const choosenMovie = chooseFromFilteredMovies(filteredMovies)
    displayMovie(choosenMovie)
  }
}

function filterMovies(age, genre) {
  if (age === 'grown ups') {
    return moviesArr.filter((movie) => movie.genre === genre)
  }

  return moviesArr.filter((movie) => movie.age === age && movie.genre === genre)
}

function chooseFromFilteredMovies(movies) {
  const numOfMovies = movies.length

  if (numOfMovies > 1) {
    const randomIndex = Math.floor(Math.random() * numOfMovies)
    return movies[randomIndex]
  }

  if (numOfMovies === 0) {
    return { name: 'no movie found, you could play Monopoly?' }
  }

  return movies[0]
}

function displayMovie(movie) {
  if (movie.imdbUrl) {
    const movieLink = document.createElement('a')
    movieLink.textContent = movie.name
    movieLink.href = movie.imdbUrl
    movieLink.className = 'imdb-link'

    suggestedMovie.textContent = ''
    suggestedMovie.appendChild(movieLink)
    currentMovie = movie.name
  } else {
    suggestedMovie.textContent = movie.name
    currentMovie = ''
  }
}

function getRandomMovie() {
  const numOfMovies = moviesArr.length
  const randomIndex = Math.floor(Math.random() * numOfMovies)

  if (moviesArr[randomIndex].name === currentMovie) {
    getRandomMovie()
  } else {
    displayMovie(moviesArr[randomIndex])
  }
}

// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.
