const elfHangoutZone = document.getElementById('elf-hangout-zone')
const btn = document.getElementById('btn')

btn.addEventListener('click', duplicateElf)

let numOfElves = 1

function duplicateElf() {
  if (numOfElves < 100) {
    numOfElves++
    const elf = document.createElement('div')
    elf.className = 'elf'
    elf.textContent = '🧝'
    elfHangoutZone.appendChild(elf)
  }
}

// Task:
// - Write a function to duplicate the elf when the button is clicked.
// - See index.css for optional styling challenges.

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
