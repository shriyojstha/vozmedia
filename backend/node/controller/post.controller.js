const PostData = require("../model/data.model");
const Home = require("../model/data.model");

exports.addPost = async (req, res, next) => {
  const { body } = req.body;

  try {
    const home = new Home({ body });

    await home.save();

    return res.status(200).json({
      success: true,
      message: "Post Created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getPost = (req, res, next) => {
  Home.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Error passing data from database to react");
    });
};
