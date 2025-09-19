

const express = require('express');
const { getPost, addPost } = require('../controller/post.controller');
const postRouter = express.Router();

postRouter.get('/posts', getPost);
postRouter.post('/posts', addPost);

module.exports = postRouter;