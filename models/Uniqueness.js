const { Schema, model } = require('mongoose')

const UniquenessSchema = new Schema({
  index: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})

const Uniqueness = model('Uniqueness', UniquenessSchema)

module.exports = { Uniqueness, UniquenessSchema }
