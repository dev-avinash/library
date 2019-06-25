const Sequelize = require('sequelize')

const InstitutionSchema = (sequelize) => {
  return sequelize.define('institution', {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      required: true
    },
    email_domain: {
      type: Sequelize.STRING(30),
      allowNull: false,
      required: true,
      unique: true
    },
    url: {
      type: Sequelize.STRING(100),
      allowNull: false,
      required: true,
      unique: true
    }
  })
}

module.exports = InstitutionSchema
