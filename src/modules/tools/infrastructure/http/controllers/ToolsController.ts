import CreateToolService from '@modules/tools/services/CreateToolService';
import DestroyToolService from '@modules/tools/services/DestroyToolService';
import ListAllToolsService from '@modules/tools/services/ListAllToolsService';
import ShowToolService from '@modules/tools/services/ShowToolService';
import StatusCode from '@shared/infrastructure/http/statusCodes';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ToolsController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { tag } = request.query;
        const listAllToolsService = container.resolve(ListAllToolsService);
        const tools = await listAllToolsService.execute(
            tag?.toString() || undefined,
        );
        return response.status(StatusCode.Ok).json(tools);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const showToolService = container.resolve(ShowToolService);
        const tool = await showToolService.execute(id);
        return response.status(StatusCode.Ok).json(tool);
    }

    public async store(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { title, link, description } = request.body;
        const createToolService = container.resolve(CreateToolService);
        const tool = await createToolService.execute({
            title,
            link,
            description,
        });
        return response.status(StatusCode.Created).json(tool);
    }

    public async destroy(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;
        const destroyToolService = container.resolve(DestroyToolService);
        await destroyToolService.execute(id);
        return response.status(StatusCode.Ok).json();
    }
}
