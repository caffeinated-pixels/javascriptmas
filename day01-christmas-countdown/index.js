const countdownDisplay = document.getElementById('countdown-display')

function renderCountdown() {
  setInterval(() => {
    const today = new Date() // get current time

    const christmasYear =
      today.getMonth() === 11 && today.getDate() > 24
        ? today.getFullYear() + 1
        : today.getFullYear()
    // determine whether Christmas is this year (< Dec 25) or next year (> Dec 24)

    const christmasDay = new Date(`December 25, ${christmasYear}`) // use christmasYear to create date object for chistmas day

    const totalMilliseconds = christmasDay - today
    // calculate difference in ms between now and chistmas day

    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24))
    //  div by 1000 to get secs, then 60 to get mins, then 60 to get hrs, then 24 to get days; round down result

    const hours = Math.floor(
      (totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    // get the remainder (in ms) from days, then div by 1000 to get secs, then 60 to get mins, then 60 to get hours; round down result

    const minutes = Math.floor(
      (totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    )
    // get the remainder (in ms) from hrs, then div by 1000 to get secs, then 60 to get mins; round down result

    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000)
    // get the remainder (in ms) from mins, then div by 1000 to get secs; round down result

    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`
    // render it to the screen!
  }, 1000)
}

renderCountdown()

// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
