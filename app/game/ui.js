'use strict'
const store = require('../store')

const events = require('./events')
const api = require('./api')



const newGameSuccess = function () {
 document.getElementById('game-display').innerText = 'Player X, it is your turn. Good Luck!'
}
const selectSpaceSuccess = function () {

}

module.exports = {
  newGameSuccess,
  selectSpaceSuccess
}
