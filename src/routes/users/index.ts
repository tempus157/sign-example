import { Router } from "express";

const path = "/users";
export const router = Router();

router.get(path, (req, res) => {
  res.send("Sign up");
});
