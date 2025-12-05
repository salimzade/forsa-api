import { NextFunction, Request, Response } from "express";

class ModelsController {
  async get(req: Request, res: Response, next: NextFunction) {}
  async getAll(req: Request, res: Response, next: NextFunction) {}
  async create(req: Request, res: Response, next: NextFunction) {}
  async update(req: Request, res: Response, next: NextFunction) {}
  async delete(req: Request, res: Response, next: NextFunction) {}
}

export default new ModelsController();