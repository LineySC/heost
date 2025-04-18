const jwt = require("jsonwebtoken");

const secretKey =
  process.env.JWT_SECRET || console.error("JWT_SECRET not found in .env file");

const authenticateJWT = (req, res, next) => {
  const token = req.headers("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentification requise" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalide" });
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateJWT };
