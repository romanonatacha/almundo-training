import { AppError } from '@am/core';
import { NextFunction, Request, Response } from 'express';

import userService from './user.service';
import { logger } from '../../shared/logger';

class UserController {
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.query) {
        logger.info(req.query, 'Query params');
      }
      const data = await userService.getUsers();
      res.json(data);
    } catch (err) {
      next(err);
    }
  };

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await userService.createUser(req.body);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await userService.getUser(req.params.id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
}

export default new UserController();
