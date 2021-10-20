// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events')

$(() => {
  // when new game button is selected, run function which clears spaces and
  // resets the game
  $('#new-game').on('click', gameEvents.onNewGame)
  // add event listener to whenever a box is clicked
  $('.box').on('click', gameEvents.selectSpace)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
})
