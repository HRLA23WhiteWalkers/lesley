const pg = require('pg');
const Sequelize = require('sequelize');

const connection = new Sequelize('fec', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
})

connection.authenticate()
  .then( () => console.log('****** postgresql is up and running ^.~ ******'))
  .catch(err => console.error(err))

module.exports = connection;