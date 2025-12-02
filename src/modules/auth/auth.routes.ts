import { Router } from 'express';
import { body } from 'express-validator';
import authController from './auth.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

export function createAuthRouter(): Router {
  const router = Router();

  router.post(
    '/register',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    authController.register
  );
  router.post('/login', authController.login);
  router.post('/logout', authController.logout);
  router.get('/activate/:link', authController.activate);
  router.get('/refresh', authController.refresh);
  router.delete('/delete', authMiddleware, authController.deleteAccount);

  return router;
}
