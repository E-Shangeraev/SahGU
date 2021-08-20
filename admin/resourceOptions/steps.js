const AdminJS = require('adminjs')
const { BachelorSteps, MagistracySteps } = require('../../models/Steps')
const features = require('../features')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['number', 'title', 'subtitle', 'text'],
  editProperties: [
    'number',
    'title',
    'subtitle',
    'text',
    'fileNames',
    'uploadedFile',
  ],
  parent: {
    name: 'Шаги поступления',
    icon: 'ChartStepper',
  },
  properties: {
    mimeType: { isVisible: false },
  },
}

module.exports = {
  BachelorStepsOptions: { options, resource: BachelorSteps, features },
  MagistracyStepsOptions: { options, resource: MagistracySteps, features },
}
