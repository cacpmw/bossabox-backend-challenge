import { inject, injectable } from 'tsyringe';
import RequestError from '@shared/exceptions/RequestError';
import IToolRepository from '../interfaces/classes/IToolRepository';

@injectable()
export default class DestroyToolService {
    constructor(
        @inject('ToolsRepository')
        private toolRepository: IToolRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        const tool = await this.toolRepository.findById(id);
        if (!tool) {
            throw new RequestError('Resource not found', 404);
        }
        await this.toolRepository.destroy(id);
    }
}
