const express = require("express");
const { upload, uploaderMedia } = require("../controller/upload.controller");
const uploadRouter = express.Router();

uploadRouter.post("/uploads", upload.single("file"), uploaderMedia);

module.exports = uploadRouter;
