const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.getVerificationToken = (req, res, next) => {
  return Math.floor(100000 + Math.random() * 900000);
};

exports.getJWTTokenandSetCookies = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "Production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
