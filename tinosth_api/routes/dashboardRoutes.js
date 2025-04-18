const express = require("express");
const { authenticateJWT } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/admin/dashboard", authenticateJWT, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Accès interdit" });
  }
  res.json({ message: "Bienvenue dans le Dashboard Admin" });
});

router.get("/salarie/dashboard", authenticateJWT, (req, res) => {
  if (req.user.role !== "salarie") {
    return res.status(403).json({ message: "Accès interdit" });
  }
  res.json({ message: "Bienvenue dans le Dashboard Salarié" });
});

module.exports = router;
