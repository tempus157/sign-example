import { Router } from "express";
import { UserModel } from "../../models/user";

export interface UserInfo {
  email: string;
  password: string;
  name: string;
}

function isUserInfo(info: UserInfo): info is UserInfo {
  return !!info && !!info.email && !!info.password && !!info.name;
}

const path = "/users";
export const router = Router();

router.post(path, async (req, res) => {
  const info = req.body;
  if (!isUserInfo(info)) {
    return res.status(400).json();
  }

  try {
    await UserModel.create({ ...info });
  } catch {
    return res.status(409).json();
  }
  return res.status(201).json();
});
