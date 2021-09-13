const { Uniqueness: UniquenessModel } = require('../models/Uniqueness')

class UniquenessController {
  async getItems(req, res) {
    try {
      const items = await UniquenessModel.find().sort({ index: 1 })
      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw error
    }
  }
}

module.exports = new UniquenessController()
