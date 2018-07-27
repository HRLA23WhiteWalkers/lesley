const db = require('../database/models');

const controller = {
  get: (req, res) => {
    db.photos.findAll({})
    .then (photos => {
      if (photos) {
        res.status(200).send(photos)
      } else {
        res.status(404).send('Not found T_T')
      }
    })
    .catch (err => console.error(err))
  },

  post: (req, res) => {
    const {url, primary, roomID} = req.body;
    db.photos.create({
      url,
      primary,
      roomID
    })
    .then(photo => {
      res.status(201).send(photo)
    })
    .catch(err => console.error(err)) 
  },

  getPhotosForRoom: (req, res) => {
    db.photos.findAll({
      where: {roomID: req.params.roomID}
    })
    .then (photos => {
      if (photos) {
        res.status(200).send(photos)
      } else {
        res.status(404).send(err)
      }
    })
    .catch (err => console.error(err))
  }
}

module.exports = controller;