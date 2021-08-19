const { model, Schema } = require('mongoose')

const StepsSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  text: { type: String, required: true },
  fileNames: [String],
  uploadedFile: JSON,
})

const BachelorSteps = new model('BachelorSteps', StepsSchema)
const MagistracySteps = new model('MagistracySteps', StepsSchema)

module.exports = { BachelorSteps, MagistracySteps, StepsSchema }
