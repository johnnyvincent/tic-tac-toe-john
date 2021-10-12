// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // when new game button is selected, run function which clears spaces and
  // resets the game
// $('#new-game').on('click', beginNewGame)
  // when board spaces are selected, run function which places
  // the choosers x or o on that space and checks to see if
  // the game is over.
// $('box1').on('click', selectSpace)
// $('box2').on('click', selectSpace)
// $('box3').on('click', selectSpace)
// $('box4').on('click', selectSpace)
// $('box5').on('click', selectSpace)
// $('box6').on('click', selectSpace)
// $('box7').on('click', selectSpace)
// $('box8').on('click', selectSpace)
// $('box9').on('click', selectSpace)

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
