import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { Jwt } from "jsonwebtoken";
import User from "../models/User";
import generateToken from "../utils/generateToken";
