const express = require("express");
const {
  createClient,
  getAllClients,
} = require("../controllers/clientController");

const router = express.Router();

router.post("/create", createClient);
router.get("/get_all", getAllClients);

module.exports = router;
