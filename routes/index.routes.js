const express = require("express");
const router = express.Router();

router.use("/api/users", uploadRoute);

module.exports = router;
