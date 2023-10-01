const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client.ctrl");

router.post("/new", clientController.createClient);
router.get("/all", clientController.getAllClients);

module.exports = router;
