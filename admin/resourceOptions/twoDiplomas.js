const AdminBro = require('admin-bro')
const { TwoDiplomas } = require('../../models/TwoDiplomas')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'description', 'uploadedFile'],
  editProperties: [
    'qualification',
    'name',
    'description',
    'features',
    'uploadedFile',
    'more',
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
}
