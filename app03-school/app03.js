const express = require('express');
const router = require('./api/routers');
require('dotenv').config();

const app = express();

app.use('/api', router);

const server = app.listen(process.env.PORT, function () {
  console.log('App is listenning on PORT: ' + server.address().port);
});
