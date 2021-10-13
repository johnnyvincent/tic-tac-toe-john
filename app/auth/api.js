'use strict'

const config = require('../config')
const store = require('../store')
const game = require('../game/game')

const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: `${game.apiUrl}/new-game`,
    method: 'POST'

  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame
}
