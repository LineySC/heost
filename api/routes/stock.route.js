const express = require("express");
const router = express.Router();

const controller = require("../controllers/stock.ctrl");

router.post("/new", controller.createStockList);
router.get("/all", controller.getStockList);
router.get("/:stockType/:stockId", controller.getStock);
router.put("/:stockId", controller.updateStock);

module.exports = router;
