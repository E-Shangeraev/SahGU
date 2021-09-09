const AdminJS = require('adminjs')
const { ContactsMain } = require('../../models/ContactsMain')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['phone', 'email', 'sites', 'address'],
  editProperties: ['phone', 'email', 'sites', 'address'],
  parent: {
    name: 'Контактная информация',
    icon: 'Information',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  options,
  resource: ContactsMain,
}
