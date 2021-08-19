const { model, Schema } = require('mongoose')

const NewsSchema = new Schema({
  uploadedFile: JSON,
  title: { type: String, required: true },
  previewText: { type: String, required: true },
  date: { type: Date, default: Date.now },
  text: { type: String },
})

module.exports = model('News', NewsSchema)
