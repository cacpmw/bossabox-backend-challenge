import IToolRepository from '@modules/tools/interfaces/classes/IToolRepository';
import IToolObject from '@modules/tools/interfaces/objects/IToolObject';
import { getRepository, Repository } from 'typeorm';
import Tool from '../entities/Tool';

export default class ToolsRepository implements IToolRepository {
    private ormRepository: Repository<Tool>;

    constructor() {
        this.ormRepository = getRepository(Tool);
    }

    public async store(tool: IToolObject): Promise<Tool> {
        const newTool = this.ormRepository.create(tool);
        await this.ormRepository.save(newTool);
        return newTool;
    }

    public async findByTitle(title: string): Promise<Tool | undefined> {
        return this.ormRepository.findOne({ where: { title } });
    }

    public async all(): Promise<Tool[]> {
        return this.ormRepository.find();
    }

    public async destroy(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
}
