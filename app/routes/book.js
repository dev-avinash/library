const express = require('express')

const BookController = require('../controllers/book')

function initBookRoutes () {
  const BookRouter = express.Router()

  BookRouter.get('/', BookController.list)

  return BookRouter
}

module.exports = initBookRoutes
