// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS
//   }
// });

// module.exports = transporter;


// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "apikey",
//     pass: process.env.BREVO_API_KEY
//   }
// });

// module.exports = transporter;

const axios = require("axios");

async function sendEmail({ to, subject, text, html }) {
  const url = "https://api.brevo.com/v3/smtp/email";

  const data = {
    sender: {
      name: "My App",
      email: process.env.EMAIL
    },
    to: [
      {
        email: to
      }
    ],
    subject,
    textContent: text,
    htmlContent: html
  };

  const headers = {
    "api-key": process.env.BREVO_API_KEY,
    "content-type": "application/json",
    "accept": "application/json"
  };

  return axios.post(url, data, { headers });
}

module.exports = sendEmail;
