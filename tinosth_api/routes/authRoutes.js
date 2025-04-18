const express = require("express");
const {
  login,
  requestAccess,
  resetPassword,
} = require("./../controllers/authController");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/request-access",

  requestAccess
);
router.post(
  "/reset-password/:token",
  [
    check("password")
      .isLength({ min: 6 })
      .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
  ],
  resetPassword
);
router.post("/login", login);

module.exports = router;
