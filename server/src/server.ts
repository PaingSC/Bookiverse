import dotenv from "dotenv";
import express from "express";
import { number } from "framer-motion";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";

dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Register routes with base path
// app.use("api/auth", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/v1/books", bookRoutes);

// Connecting to DB
const DB = process.env.DATABASE;
mongoose
  .connect(DB as string, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
