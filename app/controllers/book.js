const Responder = require('./../../lib/expressResponder')
const { Book } = require('./../models')

class BookController {
  static async list (req, res) {
    const institutionId = req.user.institution_id

    const books = await Book.findAll({ where: { institution_id: institutionId }, attributes: ['isbn', 'title', 'author'] })

    Responder.success(res, {
      books,
      count: books.length
    })
  }
}

module.exports = BookController
