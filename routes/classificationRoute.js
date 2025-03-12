const express = require('express');
const {getListByType } = require('../controller/ClassificationController.js');

const router = express.Router();
router.post('/get-list-by-type', getListByType);

module.exports = router;
