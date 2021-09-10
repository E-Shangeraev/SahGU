const { model, Schema } = require('mongoose')

const TwoDiplomasSchema = new Schema({
  published: { type: Boolean, default: true },
  qualification: {
    type: new Schema({
      0: Boolean,
      1: Boolean,
    }),
    required: true,
  },
  name: { type: String, required: true },
  description: { type: String, required: false },
  features: [String],
  uploadedFile: JSON,
  more: { type: String, required: false },
})

const TwoDiplomas = model('TwoDiplomas', TwoDiplomasSchema)

module.exports = { TwoDiplomas, TwoDiplomasSchema }
