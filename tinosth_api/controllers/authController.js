const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./../models/userModel");
const { Op } = require("sequelize");

const crypto = require("crypto");
const moment = require("moment");
const { transporter } = require("../_config/mail");
const { validationResult, header } = require("express-validator");

const secretKey =
  process.env.JWT_SECRET || console.error("JWT_SECRET not found in .env file");

const requestAccess = async (req, res) => {
  const { email } = req.body;

  // Vérification de l'email
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    // Vérification de l'existence de l'email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Aucun utilisateur trouvé avec cet email" });
    }

    // Vérifier si un token actif existe déjà
    if (user.token && moment(user.tokenExpiration).isAfter(new Date())) {
      return res.status(400).json({
        message: "Un lien d'accès est déjà actif. Vérifiez votre email.",
      });
    }

    // Création d'un token unique
    const token = crypto.randomBytes(32).toString("hex");
    const expiration = moment().add(48, "hours").toDate(); // 48 heures

    console.log("Token généré :", token); // Debugging

    // Enregistrement du token et de sa date d'expiration
    user.token = token;
    user.tokenExpiration = expiration;
    await user.save(); // 🔥 Assurez-vous que le token est bien sauvegardé

    console.log("Token enregistré en BDD :", user.token); // Debugging

    // Options du mail
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Demande d'accès à l'application",
      text: `Bonjour,\n\nVous avez demandé un accès à l'application.\n\nVeuillez cliquer sur le lien suivant pour accéder à l'application :\n\n${process.env.CLIENT_URL}/reset-password/${token}\n\nLe lien expirera dans 48 heures.\n\nCordialement,\nL'équipe de TinoSTH`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Erreur lors de l'envoi de l'email :", err);
        return res
          .status(500)
          .json({ message: "Erreur lors de l'envoi de l'email", error: err });
      }
      console.log("Email envoyé avec succès :", info.response);
      res
        .status(200)
        .json({ message: "Magic link envoyé à votre adresse e-mail." });
    });
  } catch (error) {
    console.error("Erreur interne :", error);
    res
      .status(500)
      .json({ message: `Erreur interne du serveur : ${error.message}` });
  }
};

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    secretKey,
    { expiresIn: "1h" }
  );
};

const login = async (req, res) => {
  const { email, password } = req.body.user;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Nom d'utilisateur et/ou Mot de passe incorrect" });
    }

    const token = generateToken(user);

    res.json({ token: token, role: user.role, firstname: user.firstname });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Erreur interne du serveur : ${error.message}` });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      where: { token, tokenExpiration: { [Op.gte]: new Date() } },
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message:
          "Token invalide ou expiré, merci d'effectuer une nouvelle demande de réinitialisation de mot de passe",
      });
    }

    user.password = bcrypt.hashSync(password, 10);

    user.token = null;
    user.tokenExpiration = null;
    await user.save();

    res.json({
      message:
        "Mot de passe crée avec succès. Vous pouvez dès à présent vous connecter",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Erreur interne du serveur : ${error.message}` });
  }
};

module.exports = { login, requestAccess, resetPassword };
