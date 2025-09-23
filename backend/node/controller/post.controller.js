const postData= require("../model/post.model");
const Home = require("../model/data.model");

exports.addPost = async (req, res, next) => {
  const { body, imgUrl, username} = req.body;

  try {
    const data = new postData({ body, imgUrl, username });

    await data.save();

    res.status(200).json({
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

exports.getPost = async (req, res, next) => {

  try {
    const data = await postData.find();
    res.status(200).json({
      success: true,
      post: data,
      message: 'success'
    })
  } catch (error) {
    res.status(500).json({
      
    })
  }
  
    
};
