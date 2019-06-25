const express = require('express')
const passport = require('passport')

const UserController = require('../controllers/user')

function initUserRoutes () {
  const UserRouter = express.Router()

  UserRouter.get('/signin', passport.authenticate('basic'), UserController.login)
  UserRouter.get('/create', UserController.signup)

  return UserRouter
}

module.exports = initUserRoutes
