import { NextFunction, Request, Response } from 'express';
import modelService from './models.service';

class ModelsController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { makeId } = req.body;
      const models = await modelService.get(makeId);
      return res.json(models);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const models = await modelService.getAll();
      return res.json(models);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, makeId } = req.body;
      const model = await modelService.create({ name, makeId });
      return res.json(model);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        makeId,
        modelId,
      } = req.body;
      
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default new ModelsController();
