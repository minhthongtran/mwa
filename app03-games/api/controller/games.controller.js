const gamesData = require('../data/games.json');

const getAll = function (req, res) {
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }
  let data = gamesData.slice(offset, offset + count);
  res.status(200).json(data);
};

const getOne = function (req, res) {
  const gameIndex = req.params.gameIndex;
  res.status(200).json(gamesData[gameIndex]);
};

module.exports = {
  getAll,
  getOne,
};
