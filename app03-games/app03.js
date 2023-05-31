const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const routes = require('./api/routes');

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

const server = app.listen(process.env.PORT, function () {
  console.log('App listen on Port: ' + server.address().port);
});
