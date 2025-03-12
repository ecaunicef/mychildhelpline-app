const express = require('express');
const router = express.Router();
const ctrl=require('../controller/AreaController');

router.get('/all', ctrl.getAllAreaData);

module.exports = router;   