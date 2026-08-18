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
