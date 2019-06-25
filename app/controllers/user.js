const _ = require('lodash')
const Joi = require('@hapi/joi')
const validations = require('./../validations/schema')
const Responder = require('../../lib/expressResponder')
const BadRequestError = require('../errors/badRequestError')
const { Institution, User } = require('./../models')

class UserController {
  static async login (req, res) {
    Responder.success(res, 'Login Successful')
  }

  static async signup (req, res) {
    const schema = validations.signup()
    const { error, value } = Joi.validate(req.body, schema)

    const userDetails = value

    if (error) {
      const reason = error.details[0].message.replace(new RegExp('"', 'g'), "'")
      return Responder.operationFailed(res, new BadRequestError(reason))
    }

    const userExists = await User.count({ where: { email: req.body.email } })
    if (userExists) {
      return Responder.operationFailed(res, new BadRequestError('User is already Registered!'))
    }

    const emailDomain = req.body.email.split('@')
    const institute = await Institution.findOne({ where: { email_domain: emailDomain }, attributes: ['id'] })
    if (!institute) {
      return Responder.operationFailed(res, new BadRequestError('No Such Institute is Registered!'))
    }

    const user = new User(_.assign({ institution_id: institute.id }, userDetails))

    await user.save()

    Responder.success(res, 'User Created')
  }
}

module.exports = UserController
