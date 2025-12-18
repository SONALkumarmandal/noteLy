import jwt from "jsonwebtoken";
import { config } from "../config/appConfig.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.jwt_token);

    req.user = { id: decoded.id }; 
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
