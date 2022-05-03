import bcrypt from "bcrypt";
import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  email: string;
  password: string;
  name: string;
}

const schema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  return next();
});

export const UserModel = mongoose.models.User
  ? mongoose.model<User>("User")
  : mongoose.model<User>("User", schema);
