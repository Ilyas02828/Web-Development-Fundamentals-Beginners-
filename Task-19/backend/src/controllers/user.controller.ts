import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model";

import { RegisterUserBody, LoginUserBody } from "../types/user.types";
import { JwtPayload } from "../types/auth.types";
import { generateToken } from "../services/auth.service";

export async function registerUser(
  request: Request<{}, {}, RegisterUserBody>,
  response: Response,
): Promise<void> {
  const { name, email, password } = request.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    response
      .status(409)
      .json({ success: false, message: "User already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  response
    .status(201)
    .json({ success: true, message: "User registered successfully", user });
}

export async function loginUser(
  request: Request<{}, {}, LoginUserBody>,
  response: Response,
): Promise<void> {
  const { email, password } = request.body;

  const user = await User.findOne({ email });
  if (!user) {
    response
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
    return;
  }

  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    response
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
    return;
  }

  const token = generateToken({ userId: user._id.toString() });
  response
    .status(200)
    .json({ success: true, message: "Login successful", token });
}
