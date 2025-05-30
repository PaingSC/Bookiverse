// authController.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import generateToken from "../utils/generateToken";

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, password } = req.body;
  try {
    console.log("Register controller hit:", req.body); // add this line
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user._id);

    return res.status(201).json({ user, token });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user._id);
    return res.json({ user, token });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
