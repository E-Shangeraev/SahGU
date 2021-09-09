const { Schema, model } = require('mongoose')

const ContactsMainSchema = new Schema({
  phone: String,
  email: String,
  sites: [String],
  address: String,
})

const ContactsMain = model('ContactsMain', ContactsMainSchema)

module.exports = { ContactsMain, ContactsMainSchema }
