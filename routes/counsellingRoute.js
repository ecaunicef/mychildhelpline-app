const ctrl= require('../controller/CounsellingController');
const express = require('express');

const router = express.Router();
// Mobile App APIs
router.post('/new/save', ctrl.saveCounselling);

module.exports = router;