const AdminJS = require('adminjs')
const { ContactsSecretary } = require('../../models/ContactsSecretary')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['name', 'address', 'phone', 'email'],
  editProperties: ['name', 'address', 'phone', 'email'],
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
  resource: ContactsSecretary,
}
