const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body.username);
  User.findOne({ where: { username: username } })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            res.status(400).json({
              message:
                "Le mot de passe saisi ne correspond pas avec l'identifiant",
            });
          } else {
            User.update(
              {
                lastSeen: Date.now(),
              },
              {
                where: { username: username },
              }
            );

            const token = jwt.sign(
              {
                _id: user.id,
                username: user.username,
                role: user.role,
              },
              process.env.JWT,
              {
                expiresIn: "24h",
              }
            );

            let _session_user = {
              token: token,
              _id: user.id,
            };

            const _user = {
              username: user.username,
              firstname: user.firstName,
              lastname: user.lastName,
              lastSeen: user.lastSeen,
              role: user.role,
            };
            res.status(200).json({ _user, _session_user });
          }
        })
        .catch((err) => {
          res.status(400).json("Une erreur est survenu.");
        });
    })
    .catch((err) => {
      res.status(400).json({ message: "Aucun utilisateur a été trouvé" });
    });
};
