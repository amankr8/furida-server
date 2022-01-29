const express = require('express')
const { createInfo, updateInfo } = require('../controllers/info')
const router = express.Router()

const auth = require('../../middleware/auth')

router.post('/', auth, createInfo)
router.patch('/:id', auth, updateInfo)

module.exports = router