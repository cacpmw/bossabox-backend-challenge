import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import TagsController from '../../controllers/TagsController';

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    tagsController.store,
);
tagsRouter.get('/', tagsController.index);
tagsRouter.get('/:id', tagsController.show);

export default tagsRouter;
