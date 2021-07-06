const { Subject } = require('../models/Subject')

class SubjectController {
  async getItems(req, res) {
    try {
      const items = await Subject.find()
      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw error
    }
  }
}

module.exports = new SubjectController()
