import { Request, Response } from "express";
import Book from "../../models/BookModel";

// Requesting All Books
exports.getAllBooks = async (req: Request, res: Response) => {
  try {
    // console.log(req.params);
    const books = await Book.find();

    res.status(200).json({
      status: "success",
      result: books.length,
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Fail to fetch books",
      Error: error,
    });
  }
};

// Creating a Book
exports.createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, cover, description, isbn } = req.body;
    const newBook = await Book.create(req.body);
    console.log(newBook);
    res.status(201).json({
      status: "success",
      data: {
        newBook,
      },
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: "Error creating book", error });
  }
};
