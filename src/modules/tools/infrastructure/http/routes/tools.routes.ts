import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();
// toolsRouter.use(authenticated);
const tag = Joi.object().keys({
    name: Joi.string().required(),
});
toolsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            link: Joi.string().required(),
            description: Joi.string().required(),
            tags: Joi.array().items(tag),
        },
    }),
    toolsController.store,
);
toolsRouter.get(
    '/',
    celebrate({
        [Segments.QUERY]: {
            filter: Joi.string(),
        },
    }),
    toolsController.index,
);
toolsRouter.get('/:id', toolsController.show);
toolsRouter.delete('/:id', toolsController.destroy);

export default toolsRouter;
