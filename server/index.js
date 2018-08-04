const express = require ('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const connection = require('../database/');
const router = require('./router');

const app = express();
const port = 9000;

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname), '../client/dist/index.html')
})

app.listen(port, () => console.log('Connected on port ' + port + ' ^____^b'));