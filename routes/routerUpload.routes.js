const { create_image } = require("../controllers/Upload.controllers.js");
const upload = require("../middleware/multer.js");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("image"), create_image);

module.exports = router;
