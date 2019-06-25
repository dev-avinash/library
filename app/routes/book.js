const express = require('express')
const passport = require('passport')

const BookController = require('../controllers/book')

function initBookRoutes () {
  const BookRouter = express.Router()

  BookRouter.get('/', passport.authenticate('basic'), BookController.list)

  return BookRouter
}

module.exports = initBookRoutes
