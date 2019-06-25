const Responder = require('./../../lib/expressResponder')

function initRoutes (app) {
  app.get('/', (req, res) => {
    Responder.success(res, `Express Code Challenge Started`)
  })
}

module.exports = initRoutes
