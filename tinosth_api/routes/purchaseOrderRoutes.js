const express = require("express");

const {
  createPurchaseOrder,
  validateLines,
  validateOrder,
} = require("./../controllers/purchaseOrderController");

const router = express.Router();

router.post("/", createPurchaseOrder);
router.put("/line/:lineId/validate", validateLines);
router.put("/:achatId/validate", validateOrder);

module.exports = router;
