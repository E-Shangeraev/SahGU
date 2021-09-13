const { Schema, model } = require('mongoose')

const YourStartSchema = new Schema({
  text: String,
})

const YourStart = model('YourStart', YourStartSchema)

module.exports = { YourStart, YourStartSchema }
