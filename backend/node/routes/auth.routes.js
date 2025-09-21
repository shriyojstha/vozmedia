const express = require("express");
const authRouter = express.Router();

const authController = require("../controller/auth.controller");

authRouter.get(
  "/check-auth",
  authController.verifyToken,
  authController.checkAuth
);

authRouter.post("/signUp", authController.postSignUp);
authRouter.post("/logIn", authController.postlogIn);
authRouter.post("/logout", authController.postlogOut);
authRouter.post("/verify-email", authController.postVerifyEmail);
authRouter.post("/forgetPassword", authController.postForgetPassword);
authRouter.post("/reset-password/:id", authController.postResetPassword);

module.exports = authRouter;
