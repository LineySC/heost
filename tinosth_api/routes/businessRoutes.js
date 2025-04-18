const express = require("express");
const {
  createBusiness,
  getAll,
  updateBusiness,
} = require("./../controllers/businessController");

const router = express.Router();

router.post("/create", createBusiness);
router.get("/get", getAll);
router.put("/update", updateBusiness);

module.exports = router;
