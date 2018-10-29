const wordsController = require('./words');

module.exports = (router) => {
  router.prefix('/v1')
  router.use('/words', wordsController)
}
