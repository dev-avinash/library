const Responder = require('../../lib/expressResponder')

class UserController {
  static async login (req, res) {
    Responder.success(res, 'Login Successful')
  }

  static async signup (req, res) {
    Responder.success(res, 'User Created')
  }
}

module.exports = UserController
