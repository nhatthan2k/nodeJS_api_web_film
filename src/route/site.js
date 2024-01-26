const express = require('express')
const router = express.Router()
const sitecontroller = require('../app/controller/sitecontroller')

router.get('/', sitecontroller.home)

module.exports = router