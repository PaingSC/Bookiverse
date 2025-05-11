import express from "express";
import { register, login } from "../controllers/authController--v1";

const router = express.Router();

router.post("/register", register as express.RequestHandler);
router.post("/login", login as express.RequestHandler);

// Explicitly typing the handlers
// router.post("/register", (req, res) => {
//   return register(req as express.Request, res as express.Response);
// });

// router.post("/login", (req, res) => {
//   return login(req as express.Request, res as express.Response);
// });

export default router;
