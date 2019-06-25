const Sequelize = require('sequelize')

const BookSchema = (sequelize) => {
  return sequelize.define('book', {
    isbn: {
      type: Sequelize.STRING(13),
      allowNull: false,
      required: true
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false,
      required: true,
      unique: true
    },
    author: {
      type: Sequelize.STRING(30),
      allowNull: false,
      required: true,
      unique: true
    }
  })
}

module.exports = BookSchema
