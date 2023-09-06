import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import projectRoute from "./routes/project.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/projects", projectRoute);
app.use("/api/auth", authRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(1234, () => {
  connect();
  console.log("Backend server is running 🚀");
});
