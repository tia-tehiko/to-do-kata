const express = require('express')
const router = express.Router()

const { getTasks } = require('./db')

router.get('/', (req, res) => {
  return getTasks()
    .then((tasks) => res.json(tasks))
    .catch(err => {
      res.status(500).send(err)
    })
})

module.exports = router
