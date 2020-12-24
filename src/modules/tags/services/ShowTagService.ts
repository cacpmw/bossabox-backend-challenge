import { inject, injectable } from 'tsyringe';
import RequestError from '@shared/exceptions/RequestError';
import ITagRepository from '../interfaces/classes/ITagRepository';
import Tag from '../infrastructure/typeorm/entities/Tag';

@injectable()
export default class ShowTagService {
    constructor(
        @inject('TagsRepository')
        private tagRepository: ITagRepository,
    ) {}

    public async execute(id: string): Promise<Tag> {
        const tag = await this.tagRepository.findById(id);
        if (!tag) {
            throw new RequestError('Resource not found', 404);
        }
        return tag;
    }
}
