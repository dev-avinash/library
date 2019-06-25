const express = require('express')
const http = require('http')

const index = require('../app/routes/index.js')

async function start () {
  const app = express()

  app.get('/', index)

  http.createServer(app).listen(process.env.PORT)

  return `Server started at http://localhost:${process.env.PORT}.`
}

module.exports = start
