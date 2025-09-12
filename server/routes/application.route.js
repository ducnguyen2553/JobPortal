const express = require("express");
const {
    applyToJob,
    getMyApplications,
    getApplicantsForJob,
    getApplicationById,
    updateStatus
} = require("../controllers/application.controller.js");
const { protect } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/:jobId", protect, applyToJob);
router.get("/my", protect, getMyApplications);
router.get("/job/:jobId", protect, getApplicantsForJob);
router.get("/:id", protect, getApplicationById);
router.put("/:id/status", protect, updateStatus);

module.exports = router;