import 'reflect-metadata';
import CreateToolService from '@modules/tools/services/CreateToolService';
import FakeToolsRepository from './repositories/FakeToolsRepository';
import FakeTagsRepository from './repositories/FakeTagsRepository';

let fakeToolsRepository: FakeToolsRepository;
let createToolService: CreateToolService;
let fakeTagsRepository: FakeTagsRepository;

describe('CreateTool', () => {
    beforeEach(() => {
        fakeTagsRepository = new FakeTagsRepository();
        fakeToolsRepository = new FakeToolsRepository();
        createToolService = new CreateToolService(fakeToolsRepository);
    });
    it('should be able to create a new Tool', async () => {
        const tool = await createToolService.execute({
            title: 'New Tool',
            description: 'Super cool tool',
            link: 'https://newtool.com',
        });
        expect(tool).toHaveProperty('id');
    });

    it('should not be able to create two tool with same title', async () => {
        await createToolService.execute({
            title: 'New Tool',
            description: 'Super cool tool',
            link: 'https://newtool.com',
        });

        await expect(
            createToolService.execute({
                title: 'New Tool',
                description: 'Super cool tool',
                link: 'https://newtool.com',
            }),
        ).rejects.toHaveProperty('message', 'This title is already taken');
    });
    it('should be able to create a tool with tag', async () => {
        const tag = await fakeTagsRepository.store({
            name: 'New Tag',
        });

        const tool = await createToolService.execute({
            title: 'New Tool',
            description: 'Super cool tool',
            link: 'https://newtool.com',
            tags: [tag],
        });
        expect(tool.tags.length).toBeGreaterThan(0);
    });
});
