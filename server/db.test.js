const knex = require('knex')
const config = require('../knexfile').test
const db = knex(config)

const { getTasks, saveTask } = require('./db')

beforeAll(() => db.migrate.latest())
beforeEach(() => db.seed.run())

test('get all tasks', () => {
  return getTasks(db)
    .then((tasks) => {
      expect(tasks).toHaveLength(3)
      return null
    })
})

test('save task', () => {
  return saveTask({ name: 'new task' }, db)
    .then(ids => {
      expect(ids[0] > 0).toBe(true)
      return getTasks(db)
    })
    .then(tasks => {
      expect(tasks.length).toBe(4)
      expect(tasks[3].name).toBe('new task')
      return null
    })
})
