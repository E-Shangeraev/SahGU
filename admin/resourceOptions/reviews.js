const AdminJS = require('adminjs')
const ReviewModel = require('../../models/Review')
const features = require('../features')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['index', 'uploadedFile', 'name', 'subtitle', 'text'],
  editProperties: ['index', 'uploadedFile', 'name', 'subtitle', 'text'],
  navigation: {
    icon: 'StarReview',
  },
  properties: {
    mimeType: { isVisible: false },
    text: {
      type: 'richtext',
    },
  },
}

module.exports = {
  resource: ReviewModel,
  options,
  features,
}
