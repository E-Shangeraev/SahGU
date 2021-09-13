const { YourStart: YourStartModel } = require('../models/YourStart')

class YourStartСontroller {
  getText = async (req, res) => {
    try {
      const text = await YourStartModel.findOne()
      res.status(200).json(text)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new YourStartСontroller()
