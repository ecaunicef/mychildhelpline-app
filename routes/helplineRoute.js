const ctrl = require('../controller/HelplineController.js');
const express = require('express');

const router = express.Router();

router.post('/get-helpline-by-classification', ctrl.getHelplineByClassification)

module.exports = router;