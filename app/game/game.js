
let gameActive = true
//variable which will store whose turn it is

let playerTurn = 'X'

// variable which will store whether game is still going

let gameState = 'Happening'

// create variable to store messages about the game

const gameStatusDisplay = document.querySelector('.game-display')

//create game messages

const winningMessage = () => `Player ${playerTurn} has won!`
const tieMessage = () => `Game ended in a draw!`
const currentPlayerTurn = () => `Its ${playerTurn}'s turn`
// declare variable for status of board when new game begins

let newGameState = ['', '', '', '', '', '', '', '', '']

// variable to store all Box elements

const boxes = document.getElementsByClassName('box')

// Check all boxes to see what the gameState is and find out whose turn it is

for (let i=0; i < boxes.length; i++) {
  // attach event listener to each box in game container div
  boxes[i].addEventListener('click', function() {
  // check whether this space has been played as well as what the gameState is
    if (boxes[i].innerHTML.trim() === '' && gameState === 'Happening') {
// place the current player's token on a space
      boxes[i].innerHTML = playerTurn
// switch whose turn it is after a player selects a space
    playerTurn = playerTurn == 'x' ? 'o' : 'x';
// change display at top of game board to whose turn it is currently
  document.getElementById('player-turn').innerHTML = playerTurn.toUpperCase()

// checks whether game is finished - three x's or o's in a row
// running all possible winning combinations
// and calling function which will declare the winner when game ends
      if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML
  && boxes[0].innerHTML.trim() != '') {
        displayWinner(0, 1, 2)
      } else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML
    && boxes[3].innerHTML.trim() != '') {
        displayWinner(3, 4, 5)
      } else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML
      && boxes[6].innerHTML.trim() != '') {
        displayWinner(6, 7, 8)
      } else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML
        && boxes[2].innerHTML.trim() != '') {
        displayWinner(2, 4, 6)
      } else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML
        && boxes[0].innerHTML.trim() != '') {
        displayWinner(0, 4, 8)
      } else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML
            && boxes[0].innerHTML.trim() != '') {
        displayWinner(0, 3, 6)
      } else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML
              && boxes[1].innerHTML.trim() != '') {
        displayWinner(1, 4, 7)
      } else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML
                && boxes[2].innerHTML.trim() != '') {
        displayWinner(2, 5, 8)
      }
    }
    // this will start a new game when the new game button is clicked
    // by replacing the innerHtml within each box with nothing
    function startNewGame() {
      gameActive = true
      playerTurn = 'X'
      newGameState = ['', '', '', '', '', '', '', '', '']
      gameStatusDisplay.innerHTML = currentPlayerTurn()
      document.querySelectorAll('.box').forEach(box => box.innerHTML = '')

    }
})

// show who has won the game in the game-display
  function showWinner(x, y, z) {
    document.getElementById('winner').innerHTML = playerTurn == 'x' ? 'O' : 'X'
    document.getElementById('game-display').style.display = 'block'
    gameState = 'Finished'
  }
}
