const { Schema, model } = require('mongoose')

const ContactsSecretarySchema = new Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
})

const ContactsSecretary = model('ContactsSecretary', ContactsSecretarySchema)

module.exports = { ContactsSecretary, ContactsSecretarySchema }
