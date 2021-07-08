const AdminBro = require('admin-bro')
const { Area } = require('../../models/Area')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['code', 'name', 'twoDiplomas', 'budget', 'paid'],
  editProperties: [
    'qualification',
    'code',
    'name',
    'profile',
    'description',
    'activities',
    'twoDiplomas',
    'exams',
    'budget',
    'paid',
  ],
  navigation: {
    icon: 'NotebookReference',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  options,
  resource: Area,
}
