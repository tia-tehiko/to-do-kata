const express = require('express')
const router = express.Router()

const { getTasks } = require('./db')

router.get('/', (req, res) => {
  return getTasks()
    .then((tasks) => res.json(tasks))
})

module.exports = router
