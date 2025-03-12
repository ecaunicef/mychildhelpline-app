const ctrl= require('../controller/CountryController');
const express = require('express');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.post('/get-location-data', ctrl.getLocationData)

module.exports = router;