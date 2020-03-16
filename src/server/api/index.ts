import * as express from 'express';
import * as cors from 'cors';
import * as methodOverride from 'method-override';
import * as bodyParser from 'body-parser';
import { authUserMiddleware, fourOFourMiddleware } from '@am/core';

import userRouter from './user/user.router';

const api: express.Application = express();

api.disable('x-powered-by');

// Enable method-override for old clients
api.use(methodOverride());

// Enable CORS
api.use(cors());

// Enable request body parsing
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.use(authUserMiddleware());

api.use('/users', userRouter);

api.use(fourOFourMiddleware());

export default api;
