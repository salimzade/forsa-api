import { Router } from "express";
import userController from "./user.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

export function createUserRouter(): Router {
  const router = Router();

  router.get('/profile', authMiddleware, userController.getProfile);
  router.put('/profile', authMiddleware, userController.updateProfile);
  router.get('/users', authMiddleware, userController.getAllUsers);

  return router;
}