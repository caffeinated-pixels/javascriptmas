const items = ['Candles', 'Decorations', 'Chocolate', 'Rum', 'Nut Roast']
const checklist = document.getElementById('checklist')
const addItemInput = document.getElementById('add-item')
const addItemBtn = document.getElementById('add-item-btn')

function deleteItem(index) {
  items.splice(index, 1)
  addItemsFromArray()
}

function addItemsFromArray() {
  checklist.textContent = ''
  const fragment = document.createDocumentFragment()

  items.forEach((item, i) => {
    const checklistItem = document.createElement('div')
    checklistItem.className = 'checklist-item'

    const inputEl = document.createElement('input')
    inputEl.type = 'checkbox'
    inputEl.id = `item-${i}`

    const labelEl = document.createElement('label')
    labelEl.htmlFor = `item-${i}`
    labelEl.textContent = item

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', () => deleteItem(i))

    checklistItem.appendChild(inputEl)
    checklistItem.appendChild(labelEl)
    checklistItem.appendChild(deleteBtn)
    fragment.appendChild(checklistItem)
  })

  checklist.appendChild(fragment)
}

function addNewItem(event) {
  event.preventDefault()
  items.push(addItemInput.value)
  addItemsFromArray()
}

addItemBtn.addEventListener('click', addNewItem)
addItemsFromArray()

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.
