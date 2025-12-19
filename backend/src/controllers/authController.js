const User = require("../models/User");
const OTP = require("../models/OTP");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateOTP = require("../utils/generateOTP");
const sendEmail = require("../utils/sendEmail");

exports.signup = async (req, res) => {
  const { name, email } = req.body;

  let user = await User.findOne({ email });
  if (!user) user = await User.create({ name, email });

  const otp = generateOTP();
  await OTP.create({
    email,
    otp,
    expiresAt: new Date(Date.now() + 2 * 60 * 1000)
  });

  await sendEmail(email, otp);
  res.json({ message: "OTP sent to email" });
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const record = await OTP.findOne({ email, otp });
  if (!record || record.expiresAt < Date.now()) {
    return res.status(400).json({ message: "OTP invalid or expired" });
  }

  await User.updateOne({ email }, { isVerified: true });
  await OTP.deleteMany({ email });

  res.json({ message: "OTP verified" });
};

exports.setPassword = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.updateOne({ email }, { password: hashed });
  res.json({ message: "Password set successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.isVerified)
    return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token, user });
};
