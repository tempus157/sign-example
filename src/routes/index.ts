import { Express, Router } from "express";
import { router as usersRouter } from "./users";
import { router as authRouter } from "./auth";

const router = Router();
router.use(usersRouter);
router.use(authRouter);

export function useRoutes(app: Express) {
  app.use("/api", router);
}
