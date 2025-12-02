import { Router } from 'express';
import { createAuthRouter } from '../modules/auth/auth.routes';
import { createUserRouter } from '../modules/user/user.router';

const apiRouter = Router();

apiRouter.use('/auth', createAuthRouter());
apiRouter.use('/user', createUserRouter());

export default apiRouter;