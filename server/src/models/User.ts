import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  membership: "basic" | "premium" | null;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "A user must have a name!"],
    },
    email: {
      type: String,
      required: [true, "A user must have an email!"],
      unique: [true, "There is an existing account with this email."],
    },
    password: {
      type: String,
      required: [true, "A user must have a password!"],
    },
    membership: {
      type: String,
      enum: ["basic", "premium"],
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
