function initRoutes (app) {
  app.get('/', (req, res) => {
    res.end(`Express Code Challenge Started`)
  })
}

module.exports = initRoutes
