const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);


app.get('/worker.js', (req, res) => {
  res.sendFile('./assets/worker.js', { root: __dirname });
});
app.use('/', express.static(`${__dirname}/../client`));
server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});
