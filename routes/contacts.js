const { Router } = require('express')
const ContactsMainController = require('../controllers/ContactsMain')
const router = new Router()

router.get('/main', ContactsMainController.getItems)

module.exports = router
