const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const areasRouter = require('./areas')
const subjectRouter = require('./subjects')
const instituteRouter = require('./institute')
const stepsRouter = require('./steps')
const newsRouter = require('./news')

module.exports = {
  buildAdminRouter,
  mailRouter,
  areasRouter,
  subjectRouter,
  instituteRouter,
  stepsRouter,
  newsRouter,
}
