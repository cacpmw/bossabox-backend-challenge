import { inject, injectable } from 'tsyringe';
import ITagRepository from '../interfaces/classes/ITagRepository';
import Tag from '../infrastructure/typeorm/entities/Tag';

@injectable()
export default class ListAllTagsService {
    constructor(
        @inject('TagsRepository')
        private tagRepository: ITagRepository,
    ) {}

    public async execute(): Promise<Tag[]> {
        return this.tagRepository.all();
    }
}
