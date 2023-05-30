console.log('1: App Start');
const http = require('http');
const fs = require('fs');
require('dotenv').config();
const path = require('path');

const routing = function (req, res) {
  const url = req.url;
  const method = req.method;
  if (method == 'GET') {
    switch (url) {
      case '/index.html':
        readIndexServer(req, res);
        break;
      case '/page1.html':
        readPage1Server(req, res);
        break;
      case '/page2.html':
        readPage2Server(req, res);
        break;
      default:
        readIndexServer(req, res);
        break;
    }
  } else if (method == 'POST') {
    readJson(req, res);
  }
};

const readJson = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end("{'message' : 'Hello World!'}");
};

const readIndexServer = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path.join(__dirname, 'public', 'index.html'), function (err, buffer) {
    res.writeHead(200);
    res.end(buffer);
  });
};

const readPage1Server = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path.join(__dirname, 'public', 'page1.html'), function (err, buffer) {
    res.writeHead(200);
    res.end(buffer);
  });
};

const readPage2Server = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path.join(__dirname, 'public', 'page2.html'), function (err, buffer) {
    res.writeHead(200);
    res.end(buffer);
  });
};

const server = http.createServer(routing);

server.listen(process.env.PORT, process.env.HOST, function () {
  console.log('2: listening to port ' + server.address().port);
});

console.log('3: App End');
