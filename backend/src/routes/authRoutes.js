// const router = require("express").Router();
// const c = require("../controllers/authController");

// router.post("/signup", c.signup);
// router.post("/verify-otp", c.verifyOTP);
// router.post("/set-password", c.setPassword);
// router.post("/login", c.login);

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  login,
  register
} = require("../controllers/authController");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
