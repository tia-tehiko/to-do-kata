const knex = require('knex')
const config = require('../knexfile').test
const db = knex(config)

const { getTasks, saveTask, deleteTask } = require('./db')

beforeAll(() => db.migrate.latest())
beforeEach(() => db.seed.run())

test('get all tasks', () => {
  expect.assertions(1)
  return getTasks(db)
    .then((tasks) => {
      expect(tasks).toHaveLength(3)
      return null
    })
})

test('save task', () => {
  expect.assertions(3)
  return saveTask({ name: 'new task' }, db)
    .then(ids => {
      expect(ids[0] > 0).toBe(true)
      return getTasks(db)
    })
    .then(tasks => {
      expect(tasks).toHaveLength(4)
      expect(tasks[3].name).toBe('new task')
      return null
    })
})



describe('delete', () => {
  test('deletes a task', () => {
    expect.assertions(2)
    return deleteTask(1, db)
      .then(deletedTask => {
        expect(deletedTask).toBe(1)
        return getTasks(db)
      })
      .then(tasks => {
        expect(tasks.length).toBe(2)
        return null
      })
  })
  test('id of undefined doesnt break anything', () => {
    expect.assertions(2)
    return deleteTask(undefined, db)
      .catch(errorMessage => {
        expect(errorMessage).toBe('id must be specified')
        return getTasks(db)
      })
      .then(tasks => {
        expect(tasks.length).toBe(3)
        return null
      })
  })
})
