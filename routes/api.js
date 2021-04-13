const express = require("express");
const router = express.Router()
const apiController = require("../controllers/api")

router.get("/", apiController.getTodos)

module.exports = router