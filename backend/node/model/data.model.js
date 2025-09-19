const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("home", homeSchema);
