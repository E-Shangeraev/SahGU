const { BachelorSteps, MagistracySteps } = require('../models/Steps')

class Steps {
  constructor(model) {
    this.model = model
  }
  getItems = async (req, res) => {
    try {
      const items = await this.model.find()
      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw new Error(error.message)
    }
  }
}

const BachelorStepsController = new Steps(BachelorSteps)
const MagistracyStepsController = new Steps(MagistracySteps)

module.exports = { BachelorStepsController, MagistracyStepsController }
