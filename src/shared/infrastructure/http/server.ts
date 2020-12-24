/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import { errors } from 'celebrate';
import express from 'express';
import 'express-async-errors';
import routes from '@shared/infrastructure/http/routes';
import '@shared/infrastructure/typeorm/connection';
import ExceptionHandler from '@shared/exceptions/Handler';
import '@shared/container/index';
// import rateLimiter from './middlewares/rateLimiter';
import requestLogger from './middlewares/requestLogger';

const app = express();
app.use(requestLogger);
// app.use(rateLimiter);
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());
app.use(ExceptionHandler);
app.listen(3000, () => {
    console.log('🧨 Server started on port 3000');
});
