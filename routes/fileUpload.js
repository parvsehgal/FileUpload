const express = require("express");
const router = express.Router();

const {
  uploadHandler,
  imageUpload,
  imageUploadReducer,
} = require("../controller/uploadControllers");

router.post("/fileUpload", uploadHandler);
router.post("/imageUpload", imageUpload);
router.post("/imageUploadReduce", imageUploadReducer);

module.exports = router;
