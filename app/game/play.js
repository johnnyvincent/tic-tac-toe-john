
const api = require('./api')
const ui = require('./ui')


// variable which will store whose turn it is
// let currentPlayer = 'X'
// variable which will select all boxes by class
// let boxes = document.querySelectorAll('.box')
// variable to store which spaces have been selected
//let gameStatus = ['', '', '', '', '', '', '', '', '']
// variable to check to see if game is still happening
//let gameActive = true
// figure out whose turn it is by counting number of turns, % of 0 is O, % of 1 is X
let turn = 0

let winningPlayer = '';
// variable to select all boxes
let boxes = $('.box');
// variable to represent the game display for game messages
let gameStatusDisplay = document.querySelector('.game-display')
// variable to store the array of boxes
let boxesArray = [];
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

// function for a new game board

// function newGameBoard() {

  //loop through boxes
//  for (let i = 0; i < boxes.length; i++) {
    // set inner text for all boxes to empty
 //   boxes[i].innerText = '';
    // and post message to begin game
 //   gameStatusDisplay.innerText = 'Player X, begin the game!'
 //  }
 //  winningPlayer = '';
 //  turn = 0
// }
// const onNewGame = function(event) {
 //  event.preventDefault();
 //  event.newGameBoard()
   // }

// game play

// const onPlayerClick = function(event) {
 // if (turn === 0 || turn % 2 === 0 && this.innerText === '') {
 //    this.innerText = 'X';
 //    $('.game-display')[0].innerText = 'Player X, make your move';
 //    turn++;
 //  } else if (this.innerText === '') {
 //    this.innerText = 'O';
 //    $('.game.display')[0].innerText = 'Player O, make your move';
//     turn++;
 //  } else if (this.innerText !== '') {
 //    alert('This location is taken, please find an open space')
 //  }
//   idWinner();
//  } else {
//       return
//     }


function idWinner() {

  // loop through all boxes to check for their innerText
  for (let i = 0; i < boxes.length; i++) {
    boxesArray[i] = boxes[i].innerText;
  }
  // loop through all winning outcomes to compare innerText to winning outcomes
  for ( let i = 0; i < winningOutcomes.length; i++) {

if (boxesArray[winningOutcomes[i][0]] === 'X' && boxesArray[winningOutcomes[i][1]] === 'X' && boxesArray[winningOutcomes[i][2]] === 'X') {
  $('.game-display')[0].innerText = 'Player X, you have won!!';
} else if (boxesArray[winningOutcomes[i][0]] === 'O' && boxesArray[winningOutcomes[i][1]] === 'O' && boxesArray[winningOutcomes[i][2]] === 'O') {
  $('.game-display')[0].innerText = 'Player O, you have won!!';
} else if (turn === 9 && winningPlayer === '') {
  $('.game-display')[0].innerText = 'This game is a tie!!'
}
}


 module.exports = {
idWinner,
// onNewGame,
// newGameBoard,
// onPlayerClick

}
