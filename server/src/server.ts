import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// import authRoutes from "./routes/authRoutes";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());
// app.use("api/auth", authRoutes);

// Connecting to DB
const DB = process.env.DATABASE;
mongoose
  .connect(DB as string, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));

// Book Model

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
