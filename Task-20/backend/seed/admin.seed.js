const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("../models/user.model");

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    //Enter the eamil and password of Admin if you want to add new Admin
    const adminEmail = null;
    const adminPassword = null;

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("Admin user already exists");
      await mongoose.connection.close();
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const admin = await User.create({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin user created successfully");
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Admin Seed Error:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedAdmin();
