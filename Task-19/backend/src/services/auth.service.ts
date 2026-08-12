import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.types";

export async function generateToken(payload: JwtPayload): Promise<string> {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign(payload, secret, { expiresIn: "1d" });
}
