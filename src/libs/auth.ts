import jwt from "jsonwebtoken";
import { UserModel } from "../models/user";
import { jwtSecret } from "../libs/config";

export async function getUser(credential: string) {
  let id: string | jwt.JwtPayload;
  try {
    id = jwt.verify(credential, jwtSecret);
  } catch {
    return null;
  }
  return await UserModel.findOne({ id });
}
