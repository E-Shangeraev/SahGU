// ==== Imports ====
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const { default: AdminJS } = require('adminjs')
const options = require('./admin/admin.options')
require('dotenv').config()

const app = express()

// ==== Routes ====
const {
  buildAdminRouter,
  mailRouter,
  areasRouter,
  subjectRouter,
  instituteRouter,
  stepsRouter,
  newsRouter,
  documentsInModalsRouter,
  contactsRouter,
  yourStartRouter,
  uniquenessRouter,
} = require('./routes')

// ==== Admin options ====
const admin = new AdminJS(options)
const adminRouter = buildAdminRouter(admin)

// ==== Middlewares ====
app.use(express.json({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// ==== API ====
app.use(admin.options.rootPath, adminRouter)
app.use('/api/mail', mailRouter)
app.use('/api/areas', areasRouter)
app.use('/api/subjects', subjectRouter)
app.use('/api/institutes', instituteRouter)
app.use('/api/steps', stepsRouter)
app.use('/api/news', newsRouter)
app.use('/api/documents', documentsInModalsRouter)
app.use('/api/contacts', contactsRouter)
app.use('/api/your-start', yourStartRouter)
app.use('/api/uniqueness', uniquenessRouter)

// ==== App Start On Production ====
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// ==== App Start ====
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch (err) {
    console.log('Server error', err.message)
    process.exit(1)
  }
}
start()
