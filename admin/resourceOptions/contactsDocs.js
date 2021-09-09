const AdminJS = require('adminjs')
const {
  ContactsHE: ContactsHEModel,
  ContactsME: ContactsMEModel,
} = require('../../models/ContactsDocs')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: [
    'index',
    'organization',
    'workTime',
    'address',
    'email',
    'phone',
  ],
  editProperties: [
    'index',
    'organization',
    'workTime',
    'address',
    'email',
    'phone',
  ],
  parent: {
    name: 'Контактная информация',
    icon: 'Information',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  ContactsHE: {
    options,
    resource: ContactsHEModel,
  },
  ContactsME: {
    options,
    resource: ContactsMEModel,
  },
}
