const AdminJS = require('adminjs')
const { TwoDiplomas } = require('../../models/TwoDiplomas')
const features = require('../features')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['name', 'description', 'uploadedFile'],
  editProperties: [
    'qualification',
    'name',
    'description',
    'features',
    'uploadedFile',
    'more',
    'published',
  ],
  navigation: {
    icon: 'Certificate',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  options,
  resource: TwoDiplomas,
  features,
}
