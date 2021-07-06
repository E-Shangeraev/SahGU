const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const areasRouter = require('./areas')
const subjectRouter = require('./subjects')

module.exports = {
  buildAdminRouter,
  mailRouter,
  areasRouter,
  subjectRouter,
}
