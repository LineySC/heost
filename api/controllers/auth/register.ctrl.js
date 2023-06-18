const User = require("../../models/User");
const bcrypt = require("bcrypt");

exports.register = (req, res, next) => {
  console.log(req.body);
  req.body.email = req.body.email.toLowerCase();

  const { username, email, password, passwordCheck } = req.body;

  if (password !== passwordCheck) {
    res.status(400).json("Le mot de passe saisie ne sont pas identique");
  } else {
    bcrypt.hash(password, 12).then((hash) => {
      User.create({
        username: username,
        password: hash,
        mail: email,
        createdAt: Date.now(),
        updateAd: Date.now(),
        lastSeen: Date.now(),
      })
        .then((result) => {
          res.status(200).json("Votre compte à été crée");
        })
        .catch((err) => {
          if (err.fields.mail == email) {
            res.status(400).json("L'adresse e-mail saisie est déjà enregistré");
          } else if (err.fields == username) {
            res.status(400).json("Le nom d'utilisateur est déjà utilisé");
          } else {
            res
              .status(400)
              .json(
                "Une erreur est survenue, merci de réessayer ultérieurement."
              );
          }
        });
    });
  }
};
