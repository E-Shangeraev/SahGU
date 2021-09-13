const { Router } = require('express')
const UniquenessController = require('../controllers/Uniqueness')
const router = new Router()

router.get('/', UniquenessController.getItems)

module.exports = router
