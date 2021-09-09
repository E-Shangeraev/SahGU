const { Schema, model } = require('mongoose')

const ContactsDocsSchema = new Schema({
  index: { type: Number, required: true, unique: true },
  organization: String,
  workTime: [String],
  address: String,
  phone: [
    {
      phone: String,
      text: String,
    },
  ],
  email: String,
})

const ContactsHE = model('ContactsHE', ContactsDocsSchema)
const ContactsME = model('ContactsME', ContactsDocsSchema)

module.exports = { ContactsHE, ContactsME, ContactsDocsSchema }
