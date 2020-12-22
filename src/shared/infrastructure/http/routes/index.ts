import { Router, Request, Response } from 'express';

const routes = Router();
routes.use('/', async (request: Request, response: Response) => {
    return response.status(200).json('working');
});

export default routes;
