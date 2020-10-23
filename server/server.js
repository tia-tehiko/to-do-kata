const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/api/v1/tasks', (req, res) => {
  const tasks = [
    { id: 1, name: 'update portfolio' },
    { id: 2, name: 'do washing' },
    { id: 3, name: 'ring mum' }
  ]
  res.json(tasks)
})

module.exports = server
