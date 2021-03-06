import IToolRepository from '@modules/tools/interfaces/classes/IToolRepository';
import IToolObject from '@modules/tools/interfaces/objects/IToolObject';
import { getRepository, Repository, SelectQueryBuilder } from 'typeorm';
import Tool from '../entities/Tool';

export default class ToolsRepository implements IToolRepository {
    private ormRepository: Repository<Tool>;

    constructor() {
        this.ormRepository = getRepository(Tool);
    }

    public async store({
        description,
        title,
        link,
        tags,
    }: IToolObject): Promise<Tool> {
        const newTool = this.ormRepository.create({
            description,
            link,
            title,
            tags,
        });
        await this.ormRepository.save(newTool);
        return newTool;
    }

    public async findByTitle(title: string): Promise<Tool | undefined> {
        return this.ormRepository.findOne({ where: { title } });
    }

    public async findById(id: string): Promise<Tool | undefined> {
        return this.ormRepository.findOne(id);
    }

    public async all(filter?: string | undefined): Promise<Tool[]> {
        if (filter) {
            return this.ormRepository.find({
                join: {
                    alias: 'tool',
                    leftJoinAndSelect: {
                        tags: 'tool.tags',
                    },
                },
                where: (qb: SelectQueryBuilder<Tool>) => {
                    qb.where('LOWER(tags.name) = LOWER(:tag)', { tag: filter });
                },
                relations: ['tags'],
            });
        }
        return this.ormRepository.find({
            relations: ['tags'],
        });
    }

    public async destroy(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
}
