const ctrl = require('../controller/MoodTrackerController');
const express = require('express');

const router = express.Router();

// Mobile App APIs
router.post('/create', ctrl.createMoodTracker);

module.exports = router;