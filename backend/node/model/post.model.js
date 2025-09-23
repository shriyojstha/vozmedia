const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  body: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
  },
  username: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('post', postSchema);
