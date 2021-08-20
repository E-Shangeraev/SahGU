const AdminJS = require('adminjs')
const NewsModel = require('../../models/News')
const features = require('../features')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['title', 'previewText', 'uploadedFile', 'text', 'date'],
  editProperties: ['title', 'previewText', 'uploadedFile', 'text', 'date'],
  navigation: {
    icon: 'Blog',
  },
  properties: {
    mimeType: { isVisible: false },
    text: {
      type: 'richtext',
    },
    previewText: {
      type: 'richtext',
    },
  },
}

module.exports = {
  resource: NewsModel,
  options,
  features,
}
