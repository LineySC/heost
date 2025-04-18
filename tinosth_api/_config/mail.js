const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  pool: process.env.MAIL_POOL,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  debug: true,
  logger: true,
});

module.exports = { transporter };
