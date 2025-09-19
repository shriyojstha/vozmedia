const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    isVerified: {
      type: String,
    },

    resetPasswordToken: String,
    resetPasswordExpired: Date,
    validateToken: String,
    validateTokenExpired: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", authSchema);
