'use strict'
//
const getFormFields = require('../../lib/get-form-fields')
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
const gameStatusDisplay = document.querySelector('#game-display')
// variable to store the array of boxes
let gameBoardArray = ['', '', '', '', '', '', '', '', '']
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
  // api.newGame()
  //  .then(ui.NewGameSuccess)
  //  .catch(ui.NewGameFailure)
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
    const tieGame = function () {
      if (turn === 9) {
        gameIsOver = true
      }
    }

    const pauseBoardWhenGameEnds = function () {
      if (gameIsOver) {
        $('#game-board').hide(400)
        document.getElementById('new-game-display').innerText = 'Click New Game to play again!'
      }
    }

const onSelectSpace = function (event) {
  event.preventDefault()
  if (winningPlayer === '') {
    if (this.innerText !== '') {
      document.getElementById('game-display').innerText = 'This location is taken, please find an open space'
    } else if (turn === 0 || turn % 2 === 0) {
      player = 'X'
      this.innerText = 'X'
      document.getElementById('game-display').innerText = 'Player O, make your move'
      turn++
      idWinner()
      pauseBoardWhenGameEnds()
    } else if (this.innerText === '') {
      player = 'O'
      this.innerText = 'O'
      document.getElementById('game-display').innerText = 'Player X, make your move'
      turn++
      idWinner()
      tieGame()
      pauseBoardWhenGameEnds()
    }


      // idWinner()
    // api
  // .selectSpace()
  //  .then(ui.selectSpaceSuccess)
  //  .catch(ui.selectSpaceFailure)
 // }
}
}
module.exports = {
  onNewGame,
  onSelectSpace,
  tieGame,
  pauseBoardWhenGameEnds
}
