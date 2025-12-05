import { Router } from "express";
import MakesController from "./makes.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

export function createMakesRouter(): Router {
  const router = Router();

  router.get('/all', authMiddleware, MakesController.getAll);
  router.get('/get/:id', authMiddleware, MakesController.get);
  router.post('/create', authMiddleware, MakesController.create);
  router.put('/update/:id', authMiddleware, MakesController.update);
  router.delete('/delete/:id', authMiddleware, MakesController.delete);

  return router;
}