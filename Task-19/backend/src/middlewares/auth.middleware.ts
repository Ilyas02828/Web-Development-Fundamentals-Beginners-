import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

interface JwtTokenPayload {
  userId: string;
}

export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res
        .status(401)
        .json({ success: false, message: "Authorization header is missing" });
      return;
    }

    if (!authHeader.startsWith("Bearer ")) {
      res
        .status(401)
        .json({ success: false, message: "Invalid authorization format" });
      return;
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401).json({ success: false, message: "Token is missing" });
      return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res
        .status(500)
        .json({ success: false, message: "JWT_SECRET is not configured" });
      return;
    }

    const decoded = jwt.verify(token, secret) as JwtTokenPayload;
    req.user = { userId: decoded.userId };

    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
