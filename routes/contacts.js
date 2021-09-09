const { Router } = require('express')
const ContactsMainController = require('../controllers/ContactsMain')
const ContactsСontroller = require('../controllers/Contacts')
const router = new Router()

router.get('/main', ContactsMainController.getItems)
router.get('/contacts', ContactsСontroller.getItems)

module.exports = router
