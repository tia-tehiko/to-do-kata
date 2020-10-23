const path = require('path')
const express = require('express')

const server = express()
const tasks = require('./routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/tasks', tasks)

module.exports = server
