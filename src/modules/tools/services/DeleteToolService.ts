import { inject, injectable } from 'tsyringe';
import IToolRepository from '../interfaces/classes/IToolRepository';

@injectable()
export default class DeleteToolService {
    constructor(
        @inject('ToolsRepository')
        private toolRepository: IToolRepository,
    ) { }

    public async execute(id: string): Promise<void> {
        return this.toolRepository.destroy(id);
    }
}
