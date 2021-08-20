const { Schema, model, Types } = require('mongoose')

const DocumentsInModalsSchema = new Schema({
  index: { type: Number, unique: true, required: true },
  title: { type: String, required: false },
  uploadedFile: JSON,
})

const BachelorDocuments = model('BachelorDocuments', DocumentsInModalsSchema)
const MagistracyDocuments = model(
  'MagistracyDocuments',
  DocumentsInModalsSchema,
)
const GraduateDocuments = model('GraduateDocuments', DocumentsInModalsSchema)
const SSEDocuments = model('SSEDocuments', DocumentsInModalsSchema)

module.exports = {
  BachelorDocuments,
  MagistracyDocuments,
  GraduateDocuments,
  SSEDocuments,
  DocumentsInModalsSchema,
}
