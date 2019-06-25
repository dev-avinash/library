const initBookRoutes = require('./book')
const initUserRoutes = require('./user')

function initRoutes (app) {
  app.use('/books', initBookRoutes())
  app.use('/users', initUserRoutes())
}

module.exports = initRoutes
