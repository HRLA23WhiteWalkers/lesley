const router = require('express').Router();
const controller = require('./controllers');

router.route('/rooms')
  .get(controller.get)

module.exports = router;