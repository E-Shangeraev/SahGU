const {
  BachelorDocuments,
  MagistracyDocuments,
  GraduateDocuments,
  SSEDocuments,
} = require('../models/DocumentsInModals')

class DocumentsInModals {
  constructor(model) {
    this.model = model
  }
  getItems = async (req, res) => {
    try {
      const items = await this.model.find()
      res.status(200).json(items)
    } catch (error) {
      res.status(500)
      throw new Error(error.message)
    }
  }
}

const BachelorDocumentsController = new DocumentsInModals(BachelorDocuments)
const MagistracyDocumentsController = new DocumentsInModals(MagistracyDocuments)
const GraduateDocumentsController = new DocumentsInModals(GraduateDocuments)
const SSEDocumentsController = new DocumentsInModals(SSEDocuments)

module.exports = {
  BachelorDocumentsController,
  MagistracyDocumentsController,
  GraduateDocumentsController,
  SSEDocumentsController,
}
