const AdminBro = require('admin-bro')
const { Institute } = require('../../models/Institute')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'social'],
  editProperties: ['name', 'social', 'areas'],
  navigation: {
    icon: 'Education',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  options,
  resource: Institute,
}
