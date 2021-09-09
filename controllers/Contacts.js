const { Contacts: ContactsModel } = require('../models/Contacts')

class ContactsСontroller {
  getItems = async (req, res) => {
    try {
      const items = await ContactsModel.find().sort({ index: 1 })
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new ContactsСontroller()
