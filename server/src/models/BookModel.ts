import mongoose from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  cover: string;
  description: string;
  isbn?: number;
}

// Book Schema
const bookSchema = new mongoose.Schema<IBook>({
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
  isbn: {
    type: Number,
  },
});

// Book Model
const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;

// const testBook = new Book({
//   title: "Digital Fortress",
//   author: "Dan Brown",
//   cover: "/assets/books/book_dummy.webp",
//   description: "A thriller about code and secrets.",
//   bookisbn: 12345,
// });

// testBook
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("Error 💥", err);
//   });
