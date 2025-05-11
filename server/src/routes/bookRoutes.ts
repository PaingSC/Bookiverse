import express from "express";
const bookController = require("../controllers/bookController/bookController");

const router = express.Router();

router
  .route("/")
  .get(bookController.getAllBooks as express.RequestHandler)
  .post(bookController.createBook as express.RequestHandler);

export default router;
