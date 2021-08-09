const { Router } = require('express')
const Institute = require('../controllers/Institute')
const router = new Router()

router.get('/', Institute.getItems)

module.exports = router
