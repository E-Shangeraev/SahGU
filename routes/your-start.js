const { Router } = require('express')
const YourStartController = require('../controllers/YourStart')
const router = new Router()

router.get('/', YourStartController.getText)

module.exports = router
