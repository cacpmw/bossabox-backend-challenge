import 'reflect-metadata';
import ListAllTagsService from '@modules/tags/services/ListAllTagsService';
import FakeTagsRepository from './repositories/FakeTagsRepository';

let fakeTagsRepository: FakeTagsRepository;
let listAllTagsService: ListAllTagsService;

describe('ListAllTags', () => {
    beforeEach(() => {
        fakeTagsRepository = new FakeTagsRepository();
        listAllTagsService = new ListAllTagsService(fakeTagsRepository);
    });
    it('should be able to list all tags', async () => {
        const firstTag = await fakeTagsRepository.store({
            name: 'First Tag',
        });
        const secondTag = await fakeTagsRepository.store({
            name: 'Second Tag',
        });
        const thirdTag = await fakeTagsRepository.store({
            name: 'Third Tag',
        });
        const tags = await listAllTagsService.execute();
        expect(tags).toEqual([firstTag, secondTag, thirdTag]);
    });
});
