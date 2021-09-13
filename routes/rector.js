const { Router } = require('express')
const RectorController = require('../controllers/Rector')
const router = new Router()

router.get('/', RectorController.getOne)

module.exports = router
