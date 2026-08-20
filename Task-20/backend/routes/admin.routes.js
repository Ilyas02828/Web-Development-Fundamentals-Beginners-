const express = require("express");
const getAdminStats = require("../controllers/admin.controller");
const getAllTasks = require("../controllers/admin.controller");

const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

const router = express.Router();

router.get("/stats", authMiddleware, isAdmin, getAdminStats);
router.get("/all", authMiddleware, isAdmin, getAllTasks);

module.exports = router;
