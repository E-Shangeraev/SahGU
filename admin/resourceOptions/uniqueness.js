const AdminJS = require('adminjs')
const { Uniqueness } = require('../../models/Uniqueness')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['index', 'title', 'text'],
  editProperties: ['index', 'title', 'text'],
  navigation: {
    icon: 'Sun',
  },
  properties: {
    mimeType: { isVisible: true },
    text: {
      type: 'richtext',
    },
  },
}

module.exports = {
  options,
  resource: Uniqueness,
}
