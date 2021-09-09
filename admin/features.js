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
      mimeTypes: ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'],
    },
    multiple: true,
  }),
  uploadFeature({
    provider: {
      aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
    },
    properties: {
      filePath: 'uploadedImage.filePath',
      filename: 'uploadedImage.filename',
      file: 'uploadedImage',
      filesToDelete: 'uploadedImage.filesToDelete',
      key: 'uploadedImage.path',
      bucket: 'uploadedImage.folder',
      size: 'uploadedImage.size',
      mimeType: 'uploadedImage.mime',
    },
    uploadPath: (record, filename) => `${record.id()}/images/${filename}`,
    validation: {
      mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    },
  }),
]

module.exports = features
