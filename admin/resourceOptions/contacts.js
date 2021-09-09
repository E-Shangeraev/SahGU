const AdminJS = require('adminjs')
const { Contacts } = require('../../models/Contacts')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['index', 'title', 'address', 'phone', 'email'],
  editProperties: ['index', 'title', 'address', 'phone', 'email'],
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
  resource: Contacts,
}
