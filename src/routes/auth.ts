import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Router } from "express";
import { UserModel } from "../models/user";
import { jwtSecret } from "../libs/config";

export interface SignInInfo {
  email: string;
  password: string;
}

function isSignInInfo(info: SignInInfo): info is SignInInfo {
  return !!info && !!info.email && !!info.password;
}

async function isAuth(credential: string) {
  let id: string | jwt.JwtPayload;
  try {
    id = jwt.verify(credential, jwtSecret);
  } catch {
    return false;
  }
  return await UserModel.exists({ id });
}

const path = "/auth";
export const router = Router();

router.post(path, async (req, res) => {
  const info = req.body;
  if (!isSignInInfo(info)) {
    return res.status(400);
  }

  const user = await UserModel.findOne({ email: info.email });
  if (!user) {
    return res.status(404);
  }

  const isMatch = await bcrypt.compare(info.password, user.password);
  if (!isMatch) {
    return res.status(404);
  }

  const credential = jwt.sign(user.id, jwtSecret);
  return res.status(201).json({ credential });
});

router.delete(path, async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(400);
  }

  console.log(req.headers.authorization);
  const credential = req.headers.authorization.replace("Bearer ", "");
  return res.status((await isAuth(credential)) ? 200 : 401);
});
