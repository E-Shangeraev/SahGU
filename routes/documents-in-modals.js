const { Router } = require('express')
const {
  BachelorDocumentsController,
  MagistracyDocumentsController,
  GraduateDocumentsController,
  SSEDocumentsController,
} = require('../controllers/DocumentsInModals')
const router = new Router()

router.get('/bachelor', BachelorDocumentsController.getItems)
router.get('/magistracy', MagistracyDocumentsController.getItems)
router.get('/graduate', GraduateDocumentsController.getItems)
router.get('/sse', SSEDocumentsController.getItems)

module.exports = router
