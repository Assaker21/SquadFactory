import express from "express";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/delete", verifyToken, () => {});

export default router;
