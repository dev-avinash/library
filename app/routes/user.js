const express = require('express')
const passport = require('passport')

const UserController = require('../controllers/user')

function initUserRoutes () {
  const UserRouter = express.Router()

  UserRouter.post('/signin', passport.authenticate('basic'), UserController.login)
  UserRouter.post('/create', UserController.signup)

  return UserRouter
}

module.exports = initUserRoutes
