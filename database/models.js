var Sequelize = require('sequelize');
var connection = require('./');

var photos = connection.define('photo', {
  url: Sequelize.STRING,
  listing_id: Sequelize.INTEGER,
})

connection.sync({force: false})
  .then(() => console.log('***** Synced to MySQL database *****'))
  .catch(err => console.log('****** Error syncing to MySQL database *****'))

module.exports = {photos}