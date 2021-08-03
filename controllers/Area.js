const { Area: AreaModel } = require('../models/Area')
const { TwoDiplomas: TwoDiplomasModel } = require('../models/TwoDiplomas')

class Area {
  constructor(model) {
    this.model = model
  }
  getItems = async (req, res) => {
    try {
      const { qualification } = req.query
      const items = await this.model
        .find({ [`qualification.${qualification}`]: true })
        .populate('exams.main')
        .populate('exams.alternative')

      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw error
    }
  }
}

const AreaController = new Area(AreaModel)
const TwoDiplomasController = new Area(TwoDiplomasModel)

module.exports = { AreaController, TwoDiplomasController }
