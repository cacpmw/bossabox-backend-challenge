import ITagRepository from '@modules/tools/interfaces/classes/ITagRepository';
import ITagObject from '@modules/tools/interfaces/objects/ITagObject';
import { getRepository, Repository } from 'typeorm';
import Tag from '../entities/Tag';

export default class FakeTagsRepository implements ITagRepository {
    private ormRepository: Repository<Tag>;

    constructor() {
        this.ormRepository = getRepository(Tag);
    }

    public async create(tag: ITagObject): Promise<Tag> {
        const newTag = this.ormRepository.create(tag);
        await this.ormRepository.save(newTag);
        return newTag;
    }

    public async all(): Promise<Tag[]> {
        return this.ormRepository.find();
    }

    public async findByName(name: string): Promise<Tag | undefined> {
        return this.ormRepository.findOne({ where: { name } });
    }
}
