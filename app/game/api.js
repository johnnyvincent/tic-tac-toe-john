'use strict'

const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}
const selectSpace = function (cellIndex, gameIsOver) {
  console.log('index = ' + cellIndex + ' gameIsOver = ' + gameIsOver)
  return $.ajax({
    url: `${config.apiUrl} + /games/` + store.game._id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: store.game.player
        },
        over: gameIsOver
      }
    }
  })
}

module.exports = {
  newGame,
  selectSpace
}
