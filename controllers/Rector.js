const RectorModel = require('../models/Rector')

class RectorController {
  getOne = async (req, res) => {
    try {
      const item = await RectorModel.findOne()
      res.status(200).json(item)
    } catch (error) {
      res.status(500)
      throw new Error(error.message)
    }
  }
}

module.exports = new RectorController()
