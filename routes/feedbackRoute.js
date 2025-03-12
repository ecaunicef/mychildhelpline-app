const express = require("express");
const ctrl = require("../controller/feedbackController");

const routes = express.Router();
// Mobile Apis
routes.post("/add", ctrl.add);

module.exports = routes