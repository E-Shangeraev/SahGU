const AdminJS = require('adminjs')
const { YourStart } = require('../../models/YourStart')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['text'],
  editProperties: ['text'],
  navigation: {
    icon: 'Rocket',
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
  resource: YourStart,
}
