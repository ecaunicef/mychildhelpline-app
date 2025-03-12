const express = require('express');
const { getAllBlogsForMobile} = require('../controller/blogController.js'); 

const router = express.Router();

router.post('/all', getAllBlogsForMobile)

module.exports = router;
