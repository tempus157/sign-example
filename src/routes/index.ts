import { Router } from "express";
import { router as usersRouter } from "./users";
import { router as usersCurrentRouter } from "./users/current";
import { router as authRouter } from "./auth";

export const router = Router();
router.use(usersRouter);
router.use(usersCurrentRouter);
router.use(authRouter);
