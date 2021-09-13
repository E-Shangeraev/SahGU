const { model, Schema } = require('mongoose')

const ReviewSchema = new Schema({
  index: { type: Number, required: true, unique: true },
  uploadedFile: JSON,
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  text: { type: String, required: true },
})

module.exports = model('Reviews', ReviewSchema)
