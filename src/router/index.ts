import { Router } from 'express';
import { createAuthRouter } from '../modules/auth/auth.routes';
import { createUserRouter } from '../modules/user/user.router';
import { createAdvertRouter } from '../modules/advert/advert.route';

import { createMakesRouter } from '../modules/makes/makes.routes';
import { createModelsRouter } from '../modules/models/models.routes';

const apiRouter = Router();

apiRouter.use('/auth', createAuthRouter());
apiRouter.use('/user', createUserRouter());
// apiRouter.use('/advert', createAdvertRouter());

apiRouter.use('/makes', createMakesRouter());
apiRouter.use('/models', createModelsRouter());

export default apiRouter;