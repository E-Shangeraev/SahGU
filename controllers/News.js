const NewsModel = require('../models/News')

class News {
  getItems = async (req, res) => {
    try {
      const items = await NewsModel.find()
      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw new Error(error.message)
    }
  }
  getArticle = async (req, res) => {
    try {
      const { id } = req.params
      const article = await NewsModel.findOne({ _id: id })
      res.status(200).json(article)
    } catch (error) {
      res.status(500)
      throw new Error(error.message)
    }
  }
}

module.exports = new News()
