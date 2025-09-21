const User = require("../model/auth.model");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const crypto = require("crypto");

const {
  getVerificationToken,
  getJWTTokenandSetCookies,
} = require("../utils/getVerificationToken");

//apply when mailtrap is available

// const {
//   sendVerificationEmail,
//   sendWelcomeEmail,
//   sendResetPassToken,
//   sendResetSuccess;
// } = require("../mailtrap/email");

dotenv.config();

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token)
    return res.status(400).json({ success: false, message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "unAuthorized Invalid token",
      });
    }
    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.checkAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User Not Found" });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.postSignUp = async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    if (!email || !password || !username) {
      throw new Error("All fields are required");
    }

    const emailExist = await User.findOne({ email: email });

    if (emailExist) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exist" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const validateToken = getVerificationToken();

    const user = new User({
      email,
      password: hashPassword,
      username,
      isVerified: false,
      validateToken: validateToken,
      validateTokenExpired: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    getJWTTokenandSetCookies(res, user._id);

    // await sendVerificationEmail(user.email, validateToken);

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: {
        ...user._doc,
        password: null,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postVerifyEmail = async (req, res, next) => {
  const { code } = req.body;

  console.log(code, typeof code);

  try {
    const user = await User.findOne({
      validateToken: code,
      validateTokenExpired: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ sucess: false, message: "Invalid Token" });
    }

    (user.isVerified = true),
      (user.validateToken = undefined),
      (user.validateTokenExpired = undefined),
      await user.save();

    // await sendWelcomeEmail(user.email, user.username);

    res.status(201).json({
      success: true,
      message: "Email Verified successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err}`,
    });
  }
};

exports.postlogIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const isPassRight = await bcrypt.compare(password, user.password);
    if (!isPassRight) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    getJWTTokenandSetCookies(res, user._id);

    return res.status(201).json({
      success: true,
      message: "Log In Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: `Error123: ${err}`,
    });
  }
};

exports.postlogOut = async (req, res, next) => {
  res.clearCookie("jwtToken");
  res.status(201).json({
    success: true,
    message: "Log Out Successfully",
  });
};

exports.postForgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: `Invalid Credentials`,
      });
    }

    const code = crypto.randomBytes(32).toString("hex");
    const resetPasswordTokenExpired = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = code;
    user.resetPasswordExpired = Date.now() + 1 * 60 * 60 * 1000;
    await user.save();

    // await sendResetPassToken(
    //   user.email,
    //   `${process.env.CLIENT_URL}/login/reset-password/${code}`
    // );

    return res.status(201).json({
      success: true,
      message: "Redirecting to reset password",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err}`,
    });
  }
};

exports.postResetPassword = async (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOne({
      resetPasswordToken: id,
      resetPasswordExpired: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    user.password = hashPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpired = undefined;

    await user.save();

    // await sendResetSuccess(user.email);

    return res.status(200).json({
      success: true,
      message: "Password Reset successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error_ : ${error}`,
    });
  }
};
