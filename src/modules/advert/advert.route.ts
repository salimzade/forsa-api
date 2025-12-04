import { Router } from 'express';
import AdvertController from './advert.controller.js';

export function createAdvertRouter(): Router {
  const router = Router();

  router.post('/', AdvertController.createAdvert);
  router.get('/adverts/user/:userId', AdvertController.getAdvertsByUser);
  router.get('/adverts/:advertId', AdvertController.getAdvertById);
  router.get('/adverts', AdvertController.getAllAdverts);
  router.put('/adverts/:advertId', AdvertController.updateAdvert);
  router.delete('/adverts/:advertId', AdvertController.deleteAdvert);

  return router;
}
 