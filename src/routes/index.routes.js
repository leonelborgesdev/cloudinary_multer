const Upload = require("./routerUpload.routes.js");
const express = require("express");
const router = express.Router();

router.use("/api/users", Upload);

module.exports = router;
