const { model, Schema } = require('mongoose')

const RectorSchema = new Schema({
  uploadedFile: JSON,
  name: { type: String, required: true },
  post: { type: String, required: true },
  text: { type: String },
})

module.exports = model('Rector', RectorSchema)
