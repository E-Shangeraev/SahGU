const ReviewModel = require('../models/Review')

class ReviewController {
  getItems = async (req, res) => {
    try {
      const items = await ReviewModel.find().sort({ index: 1 })
      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw new Error(error.message)
    }
  }
}

module.exports = new ReviewController()
