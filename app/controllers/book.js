const Responder = require('./../../lib/expressResponder')

class BookController {
  static async list (req, res) {
    Responder.success(res, [])
  }
}

module.exports = BookController
