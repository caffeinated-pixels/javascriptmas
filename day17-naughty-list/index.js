const niceList = document.getElementById('nice-list')
const naughtyList = document.getElementById('naughty-list')
const sortBtn = document.getElementById('sort-btn')
sortBtn.addEventListener('click', sort)

const inputContainer = document.getElementById('input-container')
const textInput = document.getElementById('text-input')
const selectList = document.getElementById('select-list')

const addPersonBtn = document.getElementById('add-person-btn')

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false,
  },
  {
    name: 'Del',
    hasBeenGood: true,
  },
  {
    name: 'Valerie',
    hasBeenGood: false,
  },
  {
    name: 'Astrid',
    hasBeenGood: true,
  },
]

function createListItem(name) {
  const listItem = document.createElement('li')
  const personName = document.createElement('p')
  const moveBtn = document.createElement('button')
  listItem.className = 'list-item'

  personName.textContent = name
  listItem.appendChild(personName)

  moveBtn.className = 'move-btn'
  moveBtn.textContent = '⇄'
  moveBtn.ariaLabel = 'move person'

  moveBtn.addEventListener('click', movePerson)

  listItem.appendChild(moveBtn)

  return listItem
}

function sort() {
  for (const person of sorteesArr) {
    const listItem = createListItem(person.name)

    if (person.hasBeenGood) {
      niceList.appendChild(listItem)
    } else {
      naughtyList.appendChild(listItem)
    }
  }

  inputContainer.style.display = 'flex'
  sortBtn.remove()
  addPersonBtn.style.display = 'inline-block'
  addPersonBtn.addEventListener('click', addPerson)
}

function addPerson(e) {
  e.preventDefault()

  if (textInput.value.trim() === '') return

  const listItem = createListItem(textInput.value.trim())

  if (selectList.value === 'nice') {
    niceList.appendChild(listItem)
  } else {
    naughtyList.appendChild(listItem)
  }

  textInput.value = ''
}

function movePerson(e) {
  console.log('move person')
  console.log(e.target.parentNode.parentNode.id)

  const currentList = e.target.parentNode.parentNode.id
  const listItem = e.target.parentNode

  if (currentList === 'nice-list') {
    naughtyList.appendChild(listItem)
  } else {
    niceList.appendChild(listItem)
  }
}

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.
