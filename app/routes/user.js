const express = require('express')

const UserController = require('../controllers/user')

function initUserRoutes () {
  const UserRouter = express.Router()

  UserRouter.get('/signin', UserController.login)
  UserRouter.get('/create', UserController.signup)

  return UserRouter
}

module.exports = initUserRoutes
