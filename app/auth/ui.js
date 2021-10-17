'use strict'

const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#game-display').text('Signed up successfully!')

  // $('#game-display').removeClass()
  // $('#game-display').addClass('text-success')

  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('Error is', error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)
  $('#game-display').text('Signed in successfully!')

 // $('#game-display').removeClass()
 // $('#game-display').addClass('text-success')

  $('form').trigger('reset')

  $('#before-sign-in').hide()
  $('#after-sign-in').show()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign in failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('Error is', error)
}

const signOutSuccess = function (responseData) {
  $('#game-display').text('Signed out successfully!')

 // $('#game-display').removeClass()
 // $('#game-display').addClass('text-success')
  $('#form').trigger('reset')

  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#error-message').text('Sign out failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('Error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
