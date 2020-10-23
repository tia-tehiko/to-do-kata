const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const tasks = [
    { id: 1, name: 'update portfolio' },
    { id: 2, name: 'do washing' },
    { id: 3, name: 'ring mum' }
  ]
  res.json(tasks)
})

module.exports = router
