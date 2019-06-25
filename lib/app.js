const http = require('http')
const express = require('express')

const database = require('./sequelize')
const index = require('../app/routes')

async function start () {
  await database.connect()

  const app = express()

  app.get('/', index)

  http.createServer(app).listen(process.env.PORT)

  return `Server started at http://localhost:${process.env.PORT}.`
}

module.exports = start
