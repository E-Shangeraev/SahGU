const { ContactsMain: ContactsMainModel } = require('../models/ContactsMain')

class ContactsMainСontroller {
  getItems = async (req, res) => {
    try {
      const items = await ContactsMainModel.findOne()
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new ContactsMainСontroller()
