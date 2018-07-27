const router = require('express').Router();
const controller = require('./controllers');

// router.route('/:listing_id', function (req, res, next) {
//   console.log('Request ID: ', req.params.listing_id);
//   next();
// })
router.route('/rooms')
  .get(controller.get)
  .post(controller.post)

router.route('/rooms/:roomID')
  .get(controller.getPhotosForRoom)

module.exports = router;