const express = require("express");
const authRouter = express.Router();

const authController = require("../controller/auth.controller");

authRouter.post("/signIn", authController.postSignIn);
authRouter.post("/logIn", authController.postlogIn);
authRouter.post("/logout", authController.postlogOut);
authRouter.post("/verify-email", authController.postVerifyEmail);

module.exports = authRouter;
