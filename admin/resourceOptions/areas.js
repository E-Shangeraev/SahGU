const AdminJS = require('adminjs')
const { Area } = require('../../models/Area')

/** @type {AdminJS.ResourceOtions} */
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
    'twoDiplomasDesc',
    'partners',
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
