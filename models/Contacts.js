const { Schema, model } = require('mongoose')

const ContactsSchema = new Schema({
  index: { type: Number, required: true, unique: true },
  title: String,
  address: String,
  phone: String,
  email: String,
})

const Contacts = model('Contacts', ContactsSchema)

module.exports = { Contacts, ContactsSchema }
