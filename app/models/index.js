const Sequelize = require('sequelize')

const BookSchema = require('./book')
const UserSchema = require('./user')
const InstitutionSchema = require('./institution')

const dbsettings = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  pool: {
    max: 40,
    min: 0,
    idle: 10000
  },
  define: {
    underscored: true
  }
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  dbsettings
)

const Book = BookSchema(sequelize)
const User = UserSchema(sequelize)
const Institution = InstitutionSchema(sequelize)

User.belongsTo(Institution, { foreignKey: 'institution_id' })
Book.belongsTo(Institution, { foreignKey: 'institution_id' })

module.exports = {
  Book,
  Institution,
  User,
  sequelize
}
