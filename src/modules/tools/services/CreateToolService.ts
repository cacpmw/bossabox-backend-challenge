import { inject, injectable } from 'tsyringe';
import RequestError from '@shared/exceptions/RequestError';
import IToolRepository from '../interfaces/classes/IToolRepository';
import IToolObject from '../interfaces/objects/IToolObject';
import Tool from '../infrastructure/typeorm/entities/Tool';

@injectable()
export default class CreateToolService {
    constructor(
        @inject('ToolsRepository')
        private toolRepository: IToolRepository,
    ) {}

    public async execute(tool: IToolObject): Promise<Tool> {
        const existingTool = await this.toolRepository.findByTitle(tool.title);
        if (existingTool) {
            throw new RequestError('This title is already taken');
        }
        const newTool = await this.toolRepository.store(tool);
        return newTool;
    }
}
