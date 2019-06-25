const http = require('http')
const express = require('express')

const database = require('./sequelize')
const routes = require('../app/routes')
const onTerminationShutGracefully = require('./shutdown')

async function start () {
  await database.connect()

  const app = express()

  app.get('/', routes)

  const server = http.createServer(app).listen(process.env.PORT)

  onTerminationShutGracefully(server)

  return `Server started at http://localhost:${process.env.PORT}.`
}

module.exports = start
