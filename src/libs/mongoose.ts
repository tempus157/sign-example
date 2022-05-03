import mongoose from "mongoose";
import { mongoURI } from "./config";

export async function useMongoose() {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
}
