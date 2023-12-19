const express = require("express");
const router = express.Router();

const { uploadHandler } = require("../controller/uploadControllers");

router.post("/fileUpload", uploadHandler);

module.exports = router;
