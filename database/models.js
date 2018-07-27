var Sequelize = require('sequelize');
var connection = require('./');

// var rooms = connection.define('room', {

// }, {timestamps: false})

var photos = connection.define('photo', {
  url: Sequelize.STRING,
  primary: Sequelize.BOOLEAN,
  roomID: Sequelize.INTEGER
}, {timestamps: false})

// rooms.hasMany(photos, {foreignKey: 'id', targetKey: 'roomID'})

connection.sync({force: false})
  .then(() => console.log('***** Synced to PostgreSQL database *****'))
  .catch(err => console.log('****** Error syncing to PostgreSQL database *****'))

// module.exports = {rooms, photos}
module.exports = {photos}