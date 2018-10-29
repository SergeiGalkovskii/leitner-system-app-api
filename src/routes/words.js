const Router = require('koa-router')
const router = new Router()
const wordsController = require('../controllers/words')

router.get('/', wordsController.get);

module.exports = router.routes();
