const { Schema, model, Types } = require('mongoose')

const InstituteSchema = new Schema({
  name: { type: String, required: true },
  social: { type: String, required: true },
  areas: { type: [Types.ObjectId], ref: 'Areas' },
})

const Institute = model('Institutes', InstituteSchema)

module.exports = { Institute, InstituteSchema }
