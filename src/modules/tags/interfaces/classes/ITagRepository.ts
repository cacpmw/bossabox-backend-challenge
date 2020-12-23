import Tag from '@modules/tags/infrastructure/typeorm/entities/Tag';
import ITagObject from '../objects/ITagObject';

export default interface ITagRepository {
    store(tag: ITagObject): Promise<Tag>;
    all(): Promise<Tag[]>;
    findByName(name: string): Promise<Tag | undefined>;
}
