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

// Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A book must have a title!"],
  },
  author: {
    type: String,
    required: [true, "A book must have a author!"],
  },
  cover: {
    type: String,
    required: [true, "A book must have a cover!"],
  },
  description: {
    type: String,
    required: [true, "A book must have a description!"],
  },
});

// Book Model
const Book = mongoose.model("Book", bookSchema);

const testBook = new Book({
  title: "Digital Fortress",
  author: "Dan Brown",
  cover: "/assets/books/book_dummy.webp",
  description: "A thriller about code and secrets.",
});

testBook
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("Error 💥", err);
  });

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
