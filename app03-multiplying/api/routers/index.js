const express = require('express');
const multiplyingController = require('../controllers/multiplyingController');

const router = express.Router();

router.route('/multiplying/:firstNumber').get(multiplyingController.getMultiplyNumber);

module.exports = router;
