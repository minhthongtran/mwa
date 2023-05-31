const express = require('express');
const app = express();
const gamesController = require('../controller/games.controller');

const router = express.Router();

router.route('/games').get(gamesController.getAll);

router.route('/games/:gameIndex').get(gamesController.getOne);

module.exports = router;
