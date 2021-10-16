'use strict'

const config = require('../config')
const store = require('../store')

const newGame = function () {
  $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// const selectSpace = function (index, value, gameIsOver) {
// $.ajax({
//    url: `${config.apiUrl} + /games/id`,
//    method: 'PATCH',
//    headers: {
//      Authorization: 'Bearer ' + store.user.token
//    },
//    data: {
//      'game': {
 //       'cell': {
//          'index': index,
//          'value': value,
//        },
//        'over': gameIsOver,
//      }
//    }
//  })
// }

module.exports = {
  newGame
 // selectSpace
}
