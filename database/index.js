const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('mvp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

connection.authenticate()
  .then( () => console.log('****** mysql is up and running ^.~ ******'))
  .catch(err => console.error(err))

module.exports = connection;