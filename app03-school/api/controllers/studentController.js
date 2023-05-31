const schoolData = require('../data/school.json');

const getAll = function (req, res) {
  res.status(200).json(schoolData);
};

const getOne = function (req, res) {
  const studentIndex = parseInt(req.params.studentIndex);
  res.status(200).json(schoolData[studentIndex - 1]);
};

module.exports = {
  getAll,
  getOne,
};
