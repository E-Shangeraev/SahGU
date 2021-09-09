const { Router } = require('express')
const ContactsMainController = require('../controllers/ContactsMain')
const ContactsСontroller = require('../controllers/Contacts')
const ContactsSecretaryСontroller = require('../controllers/ContactsSecretary')
const router = new Router()

router.get('/main', ContactsMainController.getOne)
router.get('/contacts', ContactsСontroller.getItems)
router.get('/secretary', ContactsSecretaryСontroller.getOne)

module.exports = router
