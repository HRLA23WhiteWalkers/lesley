const router = require('express').Router();
const controller = require('./controllers');

router.route('/wanderlist')
  .get(controller.get)

module.exports = router;