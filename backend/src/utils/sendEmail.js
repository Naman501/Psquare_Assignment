const transporter = require("../config/mail");

const sendEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is ${otp}. It will expire in 2 minutes.`
  });
};

module.exports = sendEmail;
