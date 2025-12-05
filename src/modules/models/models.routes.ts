import { Router } from 'express';
import ModelsController from './models.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

export function createModelsRouter(): Router {
  const router = Router();

  router.get('/all', authMiddleware, ModelsController.getAll);
  router.get('/get', authMiddleware, ModelsController.get);
  router.post('/create', authMiddleware, ModelsController.create);
  router.put('/update/:id', authMiddleware, ModelsController.update);
  router.delete('/delete/:id', authMiddleware, ModelsController.delete);

  return router;
}
