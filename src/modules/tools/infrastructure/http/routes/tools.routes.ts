import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();
// toolsRouter.use(authenticated);

toolsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            link: Joi.string().required(),
            description: Joi.string().required(),
        },
    }),
    toolsController.store,
);
toolsRouter.get('/', toolsController.index);
toolsRouter.get('/:id', toolsController.show);

export default toolsRouter;
