import { Router } from 'express';
import toolsRouter from '@modules/tools/infrastructure/http/routes/tools.routes';
import tagsRouter from '@modules/tags/infrastructure/http/routes/tags.routes';

const routes = Router();
routes.use('/tools', toolsRouter);
routes.use('/tags', tagsRouter);

export default routes;
