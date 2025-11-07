const express = require('express')
const router = express.Router()
const tryonController = require('../controllers/tryonController')

router.post('/', tryonController.tryOnHandler)

module.exports = router
