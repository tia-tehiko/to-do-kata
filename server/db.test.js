const knex = require('knex')
const config = require('../knexfile').test
const db = knex(config)

const { getTasks } = require('./db')

beforeAll(() => db.migrate.latest())
beforeEach(() => db.seed.run())

test('get all tasks', () => {
  return getTasks(db)
    .then((tasks) => {
      expect(tasks).toHaveLength(3)
      return null
    })
})
