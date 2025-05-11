import jwt from "jsonwebtoken";

const generateToken = (id: string | unknown) => {
  if (typeof id !== "string") {
    throw new Error("ID must be a string");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

export default generateToken;
