const ctrl = require('../controller/moodMapperController');
const express = require('express');

const router = express.Router();
router.get('/get-mood-list', ctrl.getMoodForApp)

module.exports = router;