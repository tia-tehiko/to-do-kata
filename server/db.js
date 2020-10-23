const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = knex(config)

function getTasks (db = connection) {
  return db('tasks').select()
}

module.exports = {
  getTasks
}
