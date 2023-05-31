const exp = require('constants');
const express = require('express');
const schoolController = require('../controllers/studentController');

const router = express.Router();

router.route('/students').get(schoolController.getAll);

router.route('/students/:studentIndex').get(schoolController.getOne);

module.exports = router;
