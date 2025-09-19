const User = require("../model/auth.model");
const bcrypt = require("bcryptjs");

const {
  getVerificationToken,
  getJWTTokenandSetCookies,
} = require("../utils/getVerificationToken");

// const {
//   sendVerificationEmail,
//   sendWelcomeEmail,
// } = require("../mailtrap/email");

exports.postSignIn = async (req, res, next) => {
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
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const isPassRight = await bcrypt.compare(password, user.password);
    if (!isPassRight) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    getJWTTokenandSetCookies(res, user._id);

    res.status(201).json({
      success: true,
      message: "Log In Successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: `Error: ${err}`,
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
