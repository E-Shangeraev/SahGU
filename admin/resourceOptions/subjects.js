const AdminJS = require('adminjs')
const { Subject } = require('../../models/Subject')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['name'],
  editProperties: ['name'],
  navigation: {
    icon: 'Notebook',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  options,
  resource: Subject,
}
