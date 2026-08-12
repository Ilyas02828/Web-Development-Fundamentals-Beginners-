import mongoose from "mongoose";

async function connectDB(): Promise<void> {
  const mongoDBURL = process.env.MONGODB_URI;
  if (!mongoDBURL) {
    throw new Error("MONGODB_URI is not defined");
  }

  await mongoose.connect(mongoDBURL);
  console.log("MongoDB Connected Successfully");
}

export default connectDB;
