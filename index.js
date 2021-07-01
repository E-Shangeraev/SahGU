// ==== Библиотеки ====
const express = require('express')
const path = require('path')

const app = express()

// ==== Middlewares ====
app.use(express.json({ extended: true }))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// ==== App Start ====
const PORT = 5000

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch (err) {
    console.log(`Server error`, err.message)
    process.exit(1)
  }
}
start()
