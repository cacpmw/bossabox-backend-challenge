import CreateTagService from '@modules/tags/services/CreateTagService';
import ListAllTagsService from '@modules/tags/services/ListAllTagsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class TagsController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listAllTagsService = container.resolve(ListAllTagsService);
        const tags = await listAllTagsService.execute();
        return response.status(200).json(tags);
    }

    public async store(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name } = request.body;
        const createTagService = container.resolve(CreateTagService);
        const tag = await createTagService.execute({
            name,
        });
        return response.status(201).json(tag);
    }
}
