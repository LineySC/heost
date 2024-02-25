const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.ctrl");

router.post("/new", employeeController.createEmployee);

module.exports = router;
