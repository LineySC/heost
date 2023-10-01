const express = require("express");
const router = express.Router();

const controller = require("../controllers/business.ctrl");

router.post("/create", controller.createBusiness);
router.get("/all", controller.getAll);

module.exports = router;
