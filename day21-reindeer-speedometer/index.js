const prevLocationDisplay = document.getElementById('prev-location')
const distanceDisplay = document.getElementById('distance')
const select = document.getElementById('select')
const time = document.getElementById('time')
const speedDisplay = document.getElementById('speed-display')

select.addEventListener('change', (e) => setPrevLocation(e.target.value))
time.addEventListener('change', (e) => calculateSpeed(e.target.value))

let prevLocation = {}
let timeTaken = 0

let destination = [
  {
    name: 'Munich',
    distanceFromPrevDestination: 2892,
  },
  {
    name: 'Kiev',
    distanceFromPrevDestination: 1111,
  },
  {
    name: 'Ulaanbaatar',
    distanceFromPrevDestination: 5324,
  },
  {
    name: 'Sydney',
    distanceFromPrevDestination: 5458,
  },
  {
    name: 'Tijuana',
    distanceFromPrevDestination: 6531,
  },
  {
    name: 'Chicago',
    distanceFromPrevDestination: 1729,
  },
]

function displayPreviousLocation() {
  prevLocationDisplay.textContent = prevLocation.name
  distanceDisplay.textContent = prevLocation.distanceFromPrevDestination
}

function setPrevLocation(currentLocation) {
  const currentIndex = destination.findIndex(
    (location) => location.name === currentLocation
  )

  const previousIndex =
    currentIndex === 0 ? destination.length - 1 : currentIndex - 1
  prevLocation = destination[previousIndex]
  displayPreviousLocation()
  calculateSpeed(time.value)
}

// these distances appear to be nautical miles, so the speed units will be knots (i.e. nautical mph)
function calculateSpeed(time) {
  const distance = prevLocation.distanceFromPrevDestination

  const speed = Math.round((distance / time) * 60).toLocaleString()
  // I'm guessing that the time is in minutes, otherwise Santa would have a very long night ahead of him!

  speedDisplay.textContent = `${speed} knots`
}

setPrevLocation(select.value)
calculateSpeed(time.value)

// Task:
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
