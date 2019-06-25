const models = require('../app/models')

module.exports = {
  model: models.Institution,
  data: [
    {
      id: 1,
      name: 'MIT University',
      email_domain: 'mit.edu',
      url: 'https://www.mit.edu'
    },
    {
      id: 2,
      name: 'Oxford University',
      email_domain: 'ox.ac.uk',
      url: 'https://www.ox.ac.uk'
    }
  ]
}
