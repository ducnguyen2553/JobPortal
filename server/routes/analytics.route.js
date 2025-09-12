const express = require("express");
const { getEmployerAnalytics } = require("../controllers/analytics.controller.js");
const { protect } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/overview", protect, getEmployerAnalytics);

module.exports = router;