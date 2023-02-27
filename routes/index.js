const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('root Router')
})

module.exports = router
