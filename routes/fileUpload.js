const express = require("express");
const router = express.Router();

const {
  uploadHandler,
  imageUpload,
} = require("../controller/uploadControllers");

router.post("/fileUpload", uploadHandler);
router.post("/imageUpload", imageUpload);

module.exports = router;
