const models = require('../app/models')

module.exports = {
  model: models.Book,
  data: [
    {
      id: 1,
      isbn: '9780262033848',
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      institution_id: 1
    },
    {
      id: 2,
      isbn: '9780470618134',
      title: 'Management For Dummies',
      author: 'Bob Nelson',
      institution_id: 1
    },
    {
      id: 3,
      isbn: '9781119365594',
      title: 'Blockchain For Dummies',
      author: 'Tiana Laurence',
      institution_id: 1
    },
    {
      id: 4,
      isbn: '9780199571123',
      title: 'Oxford English Dictionary',
      author: 'Oxford Dictionaries',
      institution_id: 2
    },
    {
      id: 5,
      isbn: '9780192842213',
      title: 'Oxford History of Art',
      author: 'Parthe Mitter',
      institution_id: 2
    }
  ]
}
