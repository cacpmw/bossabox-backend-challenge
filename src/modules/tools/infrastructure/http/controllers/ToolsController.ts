import { Request, Response } from 'express';
// import { container } from 'tsyringe';

export default class ToolsController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.status(200).json();
    }

    public async store(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.status(201).json();
    }
}
