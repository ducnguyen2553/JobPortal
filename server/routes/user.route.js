const express = require("express");
const {
    updateProfile,
    deleteResume,
    getPublicProfile
} = require("../controllers/user.controller.js");
const { protect } = require("../middlewares/authMiddleware.js");

const router = express.Router();

//protected routes
router.put("/profile", protect, updateProfile);
router.delete("/resume", protect, deleteResume);

//public route
router.get("/:id", getPublicProfile);

module.exports = router;