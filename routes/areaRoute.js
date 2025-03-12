const ctrl = require('../controller/areaController');
const express = require('express');
const router = express.Router();
const env = require('../config/env');
var fs = require('fs'),
    es = require('event-stream');
const { fork } = require('child_process');



// Admin Apis
router.post('/save', ctrl.createArea);
router.get('/delete/:id', ctrl.deleteArea);
router.post('/update', ctrl.updateArea);
router.post('/status',ctrl.updateStatus);
router.get('/associate-user/:id', ctrl.associatedUser);



module.exports = router;