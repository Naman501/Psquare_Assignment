const router = require("express").Router();
const c = require("../controllers/authController");

router.post("/signup", c.signup);
router.post("/verify-otp", c.verifyOTP);
router.post("/set-password", c.setPassword);
router.post("/login", c.login);

module.exports = router;
