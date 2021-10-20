'use strict'

// const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')
//
const api = require('./api')
const ui = require('./ui')

// variable for storing how many turns have gone by.
let turn = 0
// variable for storing the winning player for game messages
let winningPlayer = ''
// variable to store current player
let player = 'X'
// variable to store whether game is still going or not
let gameIsOver = false
// variable to select all boxes
const boxes = document.querySelectorAll('.box')
// variable to represent the game display for game messages
// const gameStatusDisplay = document.querySelector('#game-display')
// variable to store the array of boxes
// const gameBoardArray = ['', '', '', '', '', '', '', '', '']
// let cellIndex = data-cell-index
const boxesArray = []
// element to store all combinations that can win the game
const winningOutcomes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const onNewGame = function onNewGame (event) {
  event.preventDefault()
  $('.box').text('')
  winningPlayer = ''
  turn = 0
  gameIsOver = false
  $('#game-board').show(400)
  document.getElementById('new-game-display').innerText = ''
  document.getElementById('game-display').innerText = 'Player X, it is your turn. Good Luck!'
  api
    .newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const idWinner = function () {
  // loop through all boxes to check for their innerText
  for (let i = 0; i < boxes.length; i++) {
    boxesArray[i] = boxes[i].innerText
  }
  // loop through all winning outcomes to compare innerText to winning outcomes
  for (let i = 0; i < winningOutcomes.length; i++) {
    if (boxesArray[winningOutcomes[i][0]] === 'X' && boxesArray[winningOutcomes[i][1]] === 'X' && boxesArray[winningOutcomes[i][2]] === 'X') {
    // if the winning outcomes have been selected by player X
      gameIsOver = true
      document.getElementById('game-display').innerText = 'Player X, you have won!!'
    } else if (boxesArray[winningOutcomes[i][0]] === 'O' && boxesArray[winningOutcomes[i][1]] === 'O' && boxesArray[winningOutcomes[i][2]] === 'O') {
    // but if the winning outcomes have been selected by player 0, run message
      gameIsOver = true
      document.getElementById('game-display').innerText = 'Player O, you have won!!'
    } else if (turn === 9 && winningPlayer === '') {
      document.getElementById('game-display').innerText = 'This game is a tie!!'
    }
  }
}

// function checks to see if game is tied and if so, returns that game is over
const tieGame = function () {
  if (turn === 9) {
    gameIsOver = true
  }
}
// function that hides the board when the game is over(whether by win or tie)
const pauseBoardWhenGameEnds = function () {
  if (gameIsOver) {
    $('#game-board').hide(400)
    document.getElementById('new-game-display').innerText = 'Click New Game to play again!'
  }
}
// game play code to run when a space is clicked
const onSelectSpace = function (event) {
  event.preventDefault()
  // first check to make sure a player has not yet won
  if (winningPlayer === '') {
    // check to see if space has been selected
    if (this.innerText !== '') {
      // if it has, notify player the space has been selected
      document.getElementById('game-display').innerText = 'This location is taken, please find an open space'
    // otherwise if it is the first turn or an evenly numbered turn, player is X
    } else if (turn === 0 || turn % 2 === 0) {
      player = 'X'
      this.innerText = 'X'
      // notify the player O their turn is next
      document.getElementById('game-display').innerText = 'Player O, make your move'
      // add a turn with each selection to keep track of whose turn it is
      turn++
      // run function to check for winner after each turn
      idWinner()
      // run function that will hide game board if game is over
      pauseBoardWhenGameEnds()
      api
        .selectSpace()
    } else if (this.innerText === '') {
      player = 'O'
      this.innerText = 'O'
      document.getElementById('game-display').innerText = 'Player X, make your move'
      turn++
      idWinner()
      tieGame()
      pauseBoardWhenGameEnds()
      api
        .selectSpace()
    }
  }
}
module.exports = {
  onNewGame,
  onSelectSpace,
  tieGame,
  pauseBoardWhenGameEnds
}
