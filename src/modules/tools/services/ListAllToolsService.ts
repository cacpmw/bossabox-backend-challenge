import { inject, injectable } from 'tsyringe';
import IToolRepository from '../interfaces/classes/IToolRepository';
import Tool from '../infrastructure/typeorm/entities/Tool';

@injectable()
export default class ListAllToolsService {
    constructor(
        @inject('ToolsRepository')
        private toolRepository: IToolRepository,
    ) {}

    public async execute(): Promise<Tool[]> {
        return this.toolRepository.all();
    }
}
