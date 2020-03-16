import { Router } from 'express';

import userController from './user.controller';

const userRouter: Router = Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:id', userController.getUser);

export default userRouter;
