const express = require ('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const connection = require('../database/');
const room = require('../database/models');
const router = require('./router');

const server = express();
const port = 3000;

server.use(helmet());
server.use(parser.json());
server.use(parser.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.use('/api', router);


server.listen(port, () => console.log('Connected on port ' + port + ' ^____^b'));