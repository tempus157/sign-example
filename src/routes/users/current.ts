import { Router } from "express";
import { getUser } from "../../libs/auth";

const path = "/users/:id";
export const router = Router();

export interface UserInfo {
  email: string;
  name: string;
}

router.get(path, async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(400).json();
  }

  const credential = req.headers.authorization.replace("Bearer ", "");
  const user = await getUser(credential);
  if (!user) {
    return res.status(401).json();
  }

  const userInfo: UserInfo = { email: user.email, name: user.name };
  return res.status(200).json(userInfo);
});

router.delete(path, async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(400).json();
  }

  const credential = req.headers.authorization.replace("Bearer ", "");
  const user = await getUser(credential);
  if (!user) {
    return res.status(401).json();
  }

  try {
    await user.delete();
  } catch (err) {
    console.error(err);
    return res.status(409).json();
  }
  return res.status(200).json();
});
