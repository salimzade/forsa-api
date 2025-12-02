import { NextFunction, Request, Response } from 'express';
import tokenService from '../modules/token/token.service';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });

    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) return res.status(401).json({ message: 'Unauthorized' });

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) return res.status(401).json({ message: 'Unauthorized' });

    (req as any).user = userData;
    next();
  } catch (error) {
    next(error);
  }
}
