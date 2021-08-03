const { Router } = require('express')
const { AreaController, TwoDiplomasController } = require('../controllers/Area')
const router = new Router()

router.get('/', AreaController.getItems)
router.get('/two-diplomas', TwoDiplomasController.getItems)

module.exports = router
