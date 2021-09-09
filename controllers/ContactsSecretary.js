const {
  ContactsSecretary: ContactsSecretaryModel,
} = require('../models/ContactsSecretary')

class ContactsSecretaryСontroller {
  getOne = async (req, res) => {
    try {
      const items = await ContactsSecretaryModel.findOne()
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new ContactsSecretaryСontroller()
