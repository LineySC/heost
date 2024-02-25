const User = require("../models/User");
const nodemailer = require("nodemailer");

exports.createEmployee = (req, res, next) => {
  const user = req.body;
  const transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
      user: "sellivan.clair76@gmail.com",
      pass: process.env.GMAIL_APP,
    },
  });

  const mailOptions = {
    from: "noreply@theost.fr",
    to: user.mail,
    subject: "Création de votre espace",
    text: "Ceci est un test",
    html: "<b>test</b>",
  };

  User.create(user)
    .then((create) => {
      /*transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else console.log("Email sent:" + info.response);
      });*/

      res.status(400).json("L'accès employé à bien été créer");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("Impossible de créer l'accès !");
    });
};
