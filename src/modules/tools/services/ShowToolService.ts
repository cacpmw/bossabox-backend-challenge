import { inject, injectable } from 'tsyringe';
import RequestError from '@shared/exceptions/RequestError';
import IToolRepository from '../interfaces/classes/IToolRepository';
import Tool from '../infrastructure/typeorm/entities/Tool';

@injectable()
export default class ShowToolService {
    constructor(
        @inject('ToolsRepository')
        private toolRepository: IToolRepository,
    ) {}

    public async execute(id: string): Promise<Tool> {
        const tool = await this.toolRepository.findById(id);
        if (!tool) {
            throw new RequestError('Resource not found', 404);
        }
        return tool;
    }
}
