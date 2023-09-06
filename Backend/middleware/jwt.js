import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {
    if (error) return next(createError(403, "Invalid token!"));
    req.userId = payload.id;
    next();
  });
};