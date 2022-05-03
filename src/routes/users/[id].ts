import { Router } from "express";

const path = "/users/:id";
export const router = Router();

router.delete(path, (req, res) => {
  res.send("Delete account");
});
