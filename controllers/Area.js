const { Area } = require('../models/Area')
const { Subject } = require('../models/Subject')

class AreaController {
  async getItems(req, res) {
    try {
      const { qualification } = req.query
      const items = await Area.find({
        [`qualification.${qualification}`]: true,
      })
        .populate('exams.main')
        .populate('exams.alternative')

      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw error
    }
  }
}

module.exports = new AreaController()
