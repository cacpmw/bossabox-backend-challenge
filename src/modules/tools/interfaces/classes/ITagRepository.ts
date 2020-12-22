import Tag from '@modules/tools/infrastructure/typeorm/entities/Tag';
import ITagObject from '../objects/ITagObject';

export default interface ITagRepository {
    create(tag: ITagObject): Promise<Tag>;
    all(): Promise<Tag[]>;
    findByName(name: string): Promise<Tag | undefined>;
}
