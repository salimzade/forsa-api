import { Router } from 'express';
import AdvertController from './advert.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware';

export function createAdvertRouter(): Router {
  const router = Router();

  router.post('/create', authMiddleware, AdvertController.createAdvert);
  router.get('/user/:userId', authMiddleware, AdvertController.getAdvertsByUser);
  router.get('/id/:advertId', authMiddleware, AdvertController.getAdvertById);
  router.get('/list', authMiddleware, AdvertController.getAllAdverts);
  router.put('/update/:advertId', authMiddleware, AdvertController.updateAdvert);
  router.delete('/delete/:advertId', authMiddleware, AdvertController.deleteAdvert);

  return router;
}