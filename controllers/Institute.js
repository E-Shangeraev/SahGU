const { Institute: InstituteModel } = require('../models/Institute')
const { Area: AreaModel } = require('../models/Area')

class Institute {
  getItems = async (req, res) => {
    try {
      const { qualification } = req.query
      const items = await InstituteModel.find().populate({
        path: 'areas',
        match: {
          [`qualification.${qualification}`]: true,
        },
        populate: [{ path: 'exams.main' }, { path: 'exams.alternative' }],
      })
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new Institute()
