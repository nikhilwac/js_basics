const express = require("express");
const router = express.Router();

const { home } = require("../controller/homeController");

router.get("/", home);

module.exports = router;
