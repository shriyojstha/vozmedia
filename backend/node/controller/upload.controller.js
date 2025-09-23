const cloudinary = require("../config/cloudinary.config");
const multer = require("multer");

const storage = multer.memoryStorage();
exports.upload = multer({ storage });

exports.uploaderMedia = async (req, res) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ success: false, message: "No File Uploaded" });


    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    res.json({ url: result.secure_url });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
