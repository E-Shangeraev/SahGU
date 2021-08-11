const AdminBro = require('admin-bro')
const { BachelorSteps, MagistracySteps } = require('../../models/Steps')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['number', 'title', 'subtitle', 'text'],
  editProperties: ['number', 'title', 'subtitle', 'text', 'links'],
  parent: {
    name: 'Шаги поступления',
    icon: 'ChartStepper',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  BachelorStepsOptions: { options, resource: BachelorSteps },
  MagistracyStepsOptions: { options, resource: MagistracySteps },
}
