const AdminJS = require('adminjs')
const {
  BachelorDocuments,
  GraduateDocuments,
  MagistracyDocuments,
  SSEDocuments,
} = require('../../models/DocumentsInModals')
const uploadFeature = require('@adminjs/upload')
require('dotenv').config()

const region = process.env.AWS_REGION
const bucket = process.env.AWS_BUCKET
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const accessKeyId = process.env.AWS_ACCESS_KEY_ID

const features = [
  uploadFeature({
    provider: {
      aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
    },
    properties: {
      filePath: 'uploadedFile.filePath',
      filename: 'uploadedFile.filename',
      file: 'uploadedFile',
      filesToDelete: 'uploadedFile.filesToDelete',
      key: 'uploadedFile.path',
      bucket: 'uploadedFile.folder',
      size: 'uploadedFile.size',
      mimeType: 'uploadedFile.mime',
    },
    validation: {
      mimeTypes: [
        'application/pdf',
        'application/doc',
        'application/docx',
        'application/txt',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
    },
    multiple: true,
  }),
]

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['index', 'title', 'uploadedFile'],
  editProperties: ['index', 'title', 'uploadedFile'],
  parent: {
    name: 'Документы',
    icon: 'Education',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  BachelorDocumentsOptions: {
    options,
    resource: BachelorDocuments,
    features,
  },
  GraduateDocumentsOptions: {
    options,
    resource: GraduateDocuments,
    features,
  },
  MagistracyDocumentsOptions: {
    options,
    resource: MagistracyDocuments,
    features,
  },
  SSEDocumentsOptions: {
    options,
    resource: SSEDocuments,
    features,
  },
}
