import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Router } from "express";
import { UserModel } from "../models/user";
import { jwtSecret } from "../libs/config";
import { getUser } from "../libs/auth";

export interface SignInInfo {
  email: string;
  password: string;
}

export interface Credential {
  credential: string;
}

function isSignInInfo(info: SignInInfo): info is SignInInfo {
  return !!info && !!info.email && !!info.password;
}

const path = "/auth";
export const router = Router();

router.post(path, async (req, res) => {
  const info = req.body;
  if (!isSignInInfo(info)) {
    return res.status(400).json();
  }

  const user = await UserModel.findOne({ email: info.email });
  if (!user) {
    return res.status(404).json();
  }

  const isMatch = await bcrypt.compare(info.password, user.password);
  if (!isMatch) {
    return res.status(404).json();
  }

  const credential: Credential = { credential: jwt.sign(user.id, jwtSecret) };
  return res.status(201).json(credential);
});

router.delete(path, async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(400).json();
  }

  const credential = req.headers.authorization.replace("Bearer ", "");
  return res.status((await getUser(credential)) ? 200 : 401).json();
});
