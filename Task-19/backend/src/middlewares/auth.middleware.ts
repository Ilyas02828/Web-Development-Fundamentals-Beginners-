import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.types";

export function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    response.status(401).json({ message: "Authorization header missing" });
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    response.status(401).json({ message: "Token missing" });
    return;
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    response.status(500).json({ message: "JWT_SECRET is not defined" });
    return;
  }

  const decoded = jwt.verify(token, secret) as JwtPayload;
  request.user = decoded;

  next();
}
