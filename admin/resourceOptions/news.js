const AdminBro = require('admin-bro')
const { NewsModel } = require('../../models/News')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['title', 'previewText', 'uploadedFile', 'text', 'date'],
  editProperties: ['title', 'previewText', 'uploadedFile', 'text', 'date'],
  navigation: {
    icon: 'Blog',
  },
  properties: {
    mimeType: { isVisible: true },
    text: {
      type: 'richtext',
    },
    previewText: {
      type: 'richtext',
    },
  },
}

module.exports = {
  options,
  resource: NewsModel,
}
