const { Router } = require('express')
const ReviewController = require('../controllers/Review')
const router = new Router()

router.get('/', ReviewController.getItems)

module.exports = router
