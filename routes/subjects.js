const { Router } = require('express')
const SubjectController = require('../controllers/Subject')
const router = new Router()

router.get('/', SubjectController.getItems)

module.exports = router
