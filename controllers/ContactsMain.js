const { ContactsMain: ContactsMainModel } = require('../models/ContactsMain')

class ContactsMainСontroller {
  getOne = async (req, res) => {
    try {
      const item = await ContactsMainModel.findOne()
      res.status(200).json(item)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new ContactsMainСontroller()
