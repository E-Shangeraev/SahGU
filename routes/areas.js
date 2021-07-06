const { Router } = require('express')
const AreaController = require('../controllers/Area')
const router = new Router()

router.get('/', AreaController.getItems)

module.exports = router
