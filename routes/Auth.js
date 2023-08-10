const express = require("express");
const {
  createUser,
  loginUser,
  checkAuth,
  resetPasswordRequest,
  resetPassword,
  signOut,
} = require("../controller/Auth");
const passport = require("passport");

const router = express.Router();

//  /auth is already added in base path
router
  .post("/signup", createUser)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword)
  .post("/login", passport.authenticate("local"), loginUser)
  .get("/check", passport.authenticate("jwt"), checkAuth)
  .get("/signOut", passport.authenticate("jwt"), signOut);

exports.router = router;
