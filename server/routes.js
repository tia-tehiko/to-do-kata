const express = require('express')
const router = express.Router()

const { getTasks, saveTask, deleteTask } = require('./db')

router.get('/', (req, res) => {
  return getTasks()
    .then((tasks) => res.json(tasks))
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/', (req, res) => {
  const { name } = req.body
  return saveTask({ name })
    .then((ids) => {
      res.status(201).json({ id: ids[0] })
      return null
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  return deleteTask(id)
    .then(() => res.sendStatus(200))
    .catch(error => {
      res.status(500).send('DATABASE ERROR:' + error.message)
    })
})

module.exports = router
