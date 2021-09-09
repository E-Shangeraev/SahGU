const { Router } = require('express')
const ContactsMainController = require('../controllers/ContactsMain')
const ContactsСontroller = require('../controllers/Contacts')
const ContactsSecretaryСontroller = require('../controllers/ContactsSecretary')
const {
  ContactsHE: ContactsHEController,
  ContactsME: ContactsMEController,
} = require('../controllers/ContactsDocs')
const router = new Router()

router.get('/main', ContactsMainController.getOne)
router.get('/contacts', ContactsСontroller.getItems)
router.get('/secretary', ContactsSecretaryСontroller.getOne)
router.get('/higher-education', ContactsHEController.getOne)
router.get('/middle-education', ContactsMEController.getOne)

module.exports = router
