// ==== Libraries ====
const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

// ==== Routes ====
const { mailRouter } = require('./routes')

// ==== Middlewares ====
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

// ==== API ====
app.use('/api/mail', mailRouter)

// ==== App Start On Production ====
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// ==== App Start ====
const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch (err) {
    console.log(`Server error`, err.message)
    process.exit(1)
  }
}
start()
