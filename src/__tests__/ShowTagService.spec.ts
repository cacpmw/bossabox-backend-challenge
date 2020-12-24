import 'reflect-metadata';
import RequestError from '@shared/exceptions/RequestError';
import ShowTagService from '@modules/tags/services/ShowTagService';
import FakeTagsRepository from './repositories/FakeTagsRepository';

let fakeTagsRepository: FakeTagsRepository;
let showTagService: ShowTagService;

describe('ShowTag', () => {
    beforeEach(() => {
        fakeTagsRepository = new FakeTagsRepository();
        showTagService = new ShowTagService(fakeTagsRepository);
    });
    it('should be able to show a tag by id', async () => {
        const tag = await fakeTagsRepository.store({
            name: 'First Tag',
        });
        const foundTag = await showTagService.execute(tag.id);

        expect(foundTag.id).toBe(tag.id);
    });

    it('should not be able to show a tag by invalid id', async () => {
        await fakeTagsRepository.store({
            name: 'First Tag',
        });

        await expect(
            showTagService.execute('invalid-id'),
        ).rejects.toBeInstanceOf(RequestError);
    });
});
