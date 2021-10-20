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
const updateGame = function (i, value, gameIsOver) {
  return $.ajax({
    url: `${config.apiUrl} + /games/` + store.user._id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {
      game: {
        cell: {
          index: i,
          value: value
        },
        over: gameIsOver
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
