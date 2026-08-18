const express = require("express");
const router = express.Router();

const {
  getTasks,
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

router.get("/", authMiddleware, getTasks);
router.get("/admin/all", authMiddleware, isAdmin, getAllTasks);
router.get("/:id", authMiddleware, getTaskById);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
