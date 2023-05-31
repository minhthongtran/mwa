const getMultiplyNumber = function (req, res) {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.query.secondNumber);
  res.status(200).json(firstNumber * secondNumber);
};

module.exports = {
  getMultiplyNumber,
};
