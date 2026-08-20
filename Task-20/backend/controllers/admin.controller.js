const User = require("../models/user.model");
const Task = require("../models/task.model");

async function getAdminStats(request, response) {
  try {
    const totalUsers = await User.countDocuments();
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalNormalUsers = await User.countDocuments({ role: "user" });

    const totalTasks = await Task.countDocuments();

    return response.status(200).json({
      message: "Admin statistics fetched successfully",
      stats: {
        totalUsers,
        totalAdmins,
        totalNormalUsers,
        totalTasks,
      },
    });
  } catch (error) {
    console.error("Get Admin Stats Error:", error);
    return response.status(500).json({ message: "Server error" });
  }
}

module.exports = getAdminStats;

async function getAllTasks(request, response) {
  try {
    const { userId } = request.query;
    const filter = userId ? { userId } : {};

    const tasks = await Task.find(filter)
      .populate("userId", "name email role")
      .sort({ createdAt: -1 });

    return response.status(200).json(tasks);
  } catch (error) {
    console.error("Get All Tasks Error:", error);
    return response.status(500).json({ message: "Failed to get all tasks" });
  }
}

module.exports = getAllTasks;
