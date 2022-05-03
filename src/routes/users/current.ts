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
    return res.status(400);
  }

  const credential = req.headers.authorization.replace("Bearer ", "");
  const user = await getUser(credential);
  if (!user) {
    return res.status(401);
  }

  const userInfo: UserInfo = { email: user.email, name: user.name };
  return res.status(200).json(userInfo);
});

router.delete(path, async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(400);
  }

  const credential = req.headers.authorization.replace("Bearer ", "");
  const user = await getUser(credential);
  if (!user) {
    return res.status(401);
  }

  try {
    user.delete();
    await user.save();
  } catch {
    return res.status(404);
  }
  return res.status(200);
});
