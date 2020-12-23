import { inject, injectable } from 'tsyringe';
import RequestError from '@shared/exceptions/RequestError';
import ITagObject from '../interfaces/objects/ITagObject';
import ITagRepository from '../interfaces/classes/ITagRepository';
import Tag from '../infrastructure/typeorm/entities/Tag';

@injectable()
export default class CreateTagService {
    constructor(
        @inject('TagsRepository')
        private tagRepository: ITagRepository,
    ) {}

    public async execute(tag: ITagObject): Promise<Tag> {
        const existingTag = await this.tagRepository.findByName(
            tag.name.toLowerCase().trim(),
        );
        if (existingTag) {
            throw new RequestError('This name is already taken');
        }
        const newTag = await this.tagRepository.store(tag);
        return newTag;
    }
}
