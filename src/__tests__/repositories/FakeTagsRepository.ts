import Tag from '@modules/tools/infrastructure/typeorm/entities/Tag';
import ITagRepository from '@modules/tools/interfaces/classes/ITagRepository';
import ITagObject from '@modules/tools/interfaces/objects/ITagObject';
import { uuid } from 'uuidv4';

export default class FakeTagsRepository implements ITagRepository {
    private tags: Tag[] = [];

    public async create(tag: ITagObject): Promise<Tag> {
        const newTag = new Tag();
        newTag.id = uuid();
        newTag.name = tag.name.toLowerCase().trim();
        this.tags.push(newTag);
        return newTag;
    }

    public async all(): Promise<Tag[]> {
        return this.tags;
    }

    public async findByName(name: string): Promise<Tag | undefined> {
        return this.tags.find(currentTag => currentTag.name === name);
    }
}
