const db = require('../database/models');

const controller = {
  get: (req, res) => {
    var {id} = req.body;
    db.findAll({
      where: {listing_id: id}
    })
    .then (photos => {
      if (photos) {
        res.status(200).send(photos)
      } else {
        res.status(404).send('Not found T_T')
      }
    })
    .catch (err => console.error(err))
  }
}

module.exports = controller;