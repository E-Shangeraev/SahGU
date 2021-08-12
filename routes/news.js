const { Router } = require('express')
const NewsController = require('../controllers/News')
const router = new Router()

router.get('/', NewsController.getItems)
router.get('/:id', NewsController.getArticle)

module.exports = router
