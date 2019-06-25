const Sequelize = require('sequelize')
const createHash = require('../util').createHash

const UserSchema = (sequelize) => {
  return sequelize.define('user', {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      required: true
    },
    email: {
      type: Sequelize.STRING(30),
      allowNull: false,
      required: true,
      unique: true
    },
    role: {
      type: Sequelize.ENUM('STUDENT', 'ACADEMIC', 'ADMINISTRATOR'),
      allowNull: false,
      required: true,
      defaultValue: 'STUDENT'
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      required: true,
      unique: false,
      set (password) {
        this.setDataValue('password', createHash(password, process.env.PASSWORD_SALT))
      }
    }
  }, {
    hooks: {
      beforeFind: (user) => {
        if (user.where && user.where.password) {
          user.where.password = createHash(user.where.password, process.env.PASSWORD_SALT)
        }
      }
    }
  })
}

module.exports = UserSchema
