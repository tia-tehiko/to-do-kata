const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = knex(config)

function getTasks(db = connection) {
  return db('tasks').select()
}

function saveTask({ name }, db = connection) {
  return db('tasks')
    .insert({ name })
}

function deleteTask(id, db = connection) {
  if (!id) return Promise.reject('id must be specified')
  return db('tasks')
    .where('id', id)
    .del()
}

module.exports = {
  getTasks,
  saveTask,
  deleteTask
}
