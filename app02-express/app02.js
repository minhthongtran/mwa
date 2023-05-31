console.log('1: Start');
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/index.html', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/page1.html', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public', 'page1.html'));
});

app.get('/page2.html', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public', 'page2.html'));
});

app.get('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('*', function (req, res) {
  res.status(200).json({ message: 'Hello Json' });
});

const server = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + server.address().port);
});

console.log('3: End');
