const { model, Schema } = require('mongoose')

const NewsSchema = new Schema({
  title: { type: String, required: true },
  previewText: { type: String, required: true },
  uploadedFile: JSON,
  date: { type: Date, default: Date.now },
  text: { type: String },
})

const NewsModel = new model('News', NewsSchema)

module.exports = { NewsModel, NewsSchema }
