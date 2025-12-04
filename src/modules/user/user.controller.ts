import { Request, Response, NextFunction } from 'express';
import userService from './user.service';
class UserController {
  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.userId;
      console.log('Received updateProfile request for userId:', userId);

      const profileData = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        company: req.body.company,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        postal_code: req.body.postal_code
      };

      const updatedUser = await userService.updateProfile(userId, profileData);
      return res.json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.userId;
      console.log('Received getProfile request for userId:', userId);
      const profile = await userService.getProfile(userId);
      return res.json(profile);
    } catch (e) {
      next(e);
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }    
  }
}

export default new UserController();