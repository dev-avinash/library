require('dotenv').config()

const sequelize = require('./../lib/sequelize')

async function feeddata (feed) {
  const primary = feed.model.primaryKeyAttributes[0]
  for (let indx in feed.data) {
    const record = feed.data[indx]
    if (record[primary]) {
      await feed.model.upsert(record, {
        where: {
          [primary]: record[primary]
        }
      })
    } else {
      await feed.model.create(record)
    }
  }
}

async function seedData () {
  try {
    await sequelize.connect()
    await feeddata(require('./institution'))
    await feeddata(require('./book'))
    await sequelize.disconnect()
  } catch (error) {
    throw new Error(`Error occurred while seeding: ${error}`)
  }
}

seedData()
