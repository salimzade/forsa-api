import { Router } from 'express';
import AdvertController from './advert.controller.js';

export function createAdvertRouter(): Router {
  const router = Router();

  router.post('/create', AdvertController.createAdvert);
  router.get('/user/:userId', AdvertController.getAdvertsByUser);
  router.get('/id/:advertId', AdvertController.getAdvertById);
  router.get('/list', AdvertController.getAllAdverts);
  router.put('/update/:advertId', AdvertController.updateAdvert);
  router.delete('/delete/:advertId', AdvertController.deleteAdvert);

  return router;
}