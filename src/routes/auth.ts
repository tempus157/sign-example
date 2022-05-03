import { Router } from "express";

const path = "/auth";
export const router = Router();

router.post(path, (req, res) => {
  res.send("Sign in");
});

router.delete(path, (req, res) => {
  res.send("Sign out");
});
