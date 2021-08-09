const { Institute: InstituteModel } = require('../models/Institute')

class Institute {
  getItems = async (req, res) => {
    try {
      const { qualification } = req.query
      const items = await InstituteModel.find().populate({
        path: 'areas',
        match: {
          [`qualification.${qualification}`]: true,
        },
      })
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new Institute()
