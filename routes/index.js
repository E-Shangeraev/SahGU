const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const areasRouter = require('./areas')
const subjectRouter = require('./subjects')
const instituteRouter = require('./institute')
const stepsRouter = require('./steps')
const newsRouter = require('./news')
const documentsInModalsRouter = require('./documents-in-modals')

module.exports = {
  buildAdminRouter,
  mailRouter,
  areasRouter,
  subjectRouter,
  instituteRouter,
  stepsRouter,
  newsRouter,
  documentsInModalsRouter,
}
