import mongoose from "mongoose";
import { mongoURI } from "$libs/config";

mongoose.connect(mongoURI);
export * from "./user";
