import { Router } from 'express';
import { createAuthRouter } from '../modules/auth/auth.routes';
import { createUserRouter } from '../modules/user/user.router';
import { createAdvertisementRouter } from '../modules/advert/advert.route';

const apiRouter = Router();

apiRouter.use('/auth', createAuthRouter());
apiRouter.use('/user', createUserRouter());
apiRouter.use('/advertisements', createAdvertisementRouter());

export default apiRouter;