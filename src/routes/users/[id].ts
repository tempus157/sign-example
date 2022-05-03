import { Router } from "express";
import { UserModel } from "../../models/user";

const path = "/users/:id";
export const router = Router();

router.delete(path, async (req, res) => {
  try {
    await UserModel.deleteOne({ id: req.params.id });
  } catch {
    return res.status(404);
  }
  return res.status(200);
});
