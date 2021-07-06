const AdminBro = require('admin-bro')
const { Area } = require('../../models/Area')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: [
    'qualification',
    'code',
    'name',
    'profile',
    'activities',
    'twoDiplomas',
    'exams',
    'budget',
    'paid',
  ],
  editProperties: [
    'qualification',
    'code',
    'name',
    'profile',
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
