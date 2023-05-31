const express = require('express');
const { route } = require('./api/routers');
const router = require('./api/routers');
require('dotenv').config();

const app = express();

app.use('/api', router);

const server = app.listen(process.env.PORT, function () {
  console.log('App listen on port: ' + server.address().port);
});
