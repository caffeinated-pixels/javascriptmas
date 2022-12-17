const input = document.getElementById('input')
const listContainer = document.getElementById('list-container')

const btn = document.getElementById('btn')
btn.addEventListener('click', addGuest)

const guests = [
  'Partner',
  'Nice Relative 1',
  'Nice Relative 2',
  'Evil Relative',
  'Lonely Neighbour',
]

function displayList() {
  listContainer.textContent = ''
  const guestList = document.createElement('ul')
  guestList.className = 'guest-list'

  guests.forEach((guest, i) => {
    const listItem = document.createElement('li')
    const listText = document.createElement('p')

    listText.textContent = guest
    listItem.appendChild(listText)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.className = 'delete-btn'
    deleteBtn.ariaLabel = 'Delete guest'
    deleteBtn.addEventListener('click', () => deleteGuest(i))

    listItem.appendChild(deleteBtn)
    guestList.appendChild(listItem)
  })
  listContainer.appendChild(guestList)
}

displayList()

function addGuest(e) {
  e.preventDefault()
  const newGuest = input.value.trim()

  if (newGuest.length > 0) {
    input.value = ''
    guests.push(newGuest)
    displayList()
  }
}

function deleteGuest(index) {
  guests.splice(index, 1)
  displayList()
}

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
