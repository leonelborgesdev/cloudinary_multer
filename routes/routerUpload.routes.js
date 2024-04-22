const uploadRoute = require("../controllers/Upload.controllers");

const express = require("express");
const router = express.Router();

router.post("/api/users", uploadRoute);

module.exports = router;
