const Joi = require('@hapi/joi')

function signup () {
  return Joi.object().keys({
    name: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    role: Joi.string().valid(['STUDENT', 'ACADEMIC', 'ADMINISTRATOR']),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
  })
}

module.exports = { signup }
