import 'reflect-metadata';
import CreateTagService from '@modules/tools/services/CreateTagService';
import FakeTagsRepository from './repositories/FakeTagsRepository';

let fakeTagsRepository: FakeTagsRepository;
let createTagService: CreateTagService;

describe('CreateTag', () => {
    beforeEach(() => {
        fakeTagsRepository = new FakeTagsRepository();
        createTagService = new CreateTagService(fakeTagsRepository);
    });
    it('should be able to create a new Tag', async () => {
        const tag = await createTagService.execute({
            name: 'New Tag'.toLowerCase().trim(),
        });
        expect(tag).toHaveProperty('id');
    });

    it('should not be able to create two tags with same name', async () => {
        await createTagService.execute({
            name: 'New Tag'.toLowerCase().trim(),
        });

        await expect(
            createTagService.execute({
                name: 'New Tag'.toLowerCase().trim(),
            }),
        ).rejects.toHaveProperty('message', 'This name is already taken');
    });
});
