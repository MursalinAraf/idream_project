const express = require('express')
const router = express.Router()
const {createUser, getUsers, getUser} = require('../Controllers/userController')

router.post('/',createUser)
router.get('/',getUsers)
router.get('/:uuid',getUser)

module.exports = router