const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('userRouter Root')
})

module.exports = router
