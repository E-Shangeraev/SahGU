const { Router } = require('express')
const {
  BachelorStepsController,
  MagistracyStepsController,
} = require('../controllers/Steps')
const router = new Router()

router.get('/bachelor', BachelorStepsController.getItems)
router.get('/magistracy', MagistracyStepsController.getItems)

module.exports = router
