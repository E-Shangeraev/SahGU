const {
  ContactsHE: ContactsHEModel,
  ContactsME: ContactsMEModel,
} = require('../models/ContactsDocs')

class ContactsDocsСontroller {
  constructor(model) {
    this.model = model
  }
  getOne = async (req, res) => {
    try {
      const item = await this.model.findOne()
      res.status(200).json(item)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

const ContactsHE = new ContactsDocsСontroller(ContactsHEModel)
const ContactsME = new ContactsDocsСontroller(ContactsMEModel)

module.exports = { ContactsHE, ContactsME }
