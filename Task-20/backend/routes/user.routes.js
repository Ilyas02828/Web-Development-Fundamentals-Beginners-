const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  deleteUser,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);

module.exports = router;
