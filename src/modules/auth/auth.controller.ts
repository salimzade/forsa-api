import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import authService from './auth.service';
import { Env } from '../../configs/env';

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation error', errors });
      }

      const { email, password } = req.body;
      const userData = await authService.register(email, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await authService.login(email, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const tokenData = await authService.logout(refreshToken);
      return res.json(tokenData);
    } catch (e) {
      next(e);
    }
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    try {
      const activationLink = req.params.link;
      await authService.activate(activationLink);
      return res.redirect(Env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const userData = await authService.refresh(refreshToken);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async deleteAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.body;
      const result = await authService.deleteAccount(userId);
      return res.json({
        message: 'Account deleted successfully',
        data: result?.email
      });
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthController();
