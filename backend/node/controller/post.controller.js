const PostData = require("../model/data.model");
const Home = require("../model/data.model");

exports.addPost = (req, res, next) => {
  const { body } = req.body;
  const home = new Home({ body });

  home
    .save()
    .then(()=> {
      console.log('Posted on DB')
    })
    .catch((err) => {
      console.log("Error while posting in db: ", err);
    });
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
