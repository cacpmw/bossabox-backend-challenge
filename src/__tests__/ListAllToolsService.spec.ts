import 'reflect-metadata';
import ListAllToolsService from '@modules/tools/services/ListAllToolsService';
import FakeToolsRepository from './repositories/FakeToolsRepository';

let fakeToolsRepository: FakeToolsRepository;
let listAllToolsService: ListAllToolsService;

describe('ListAllTools', () => {
    beforeEach(() => {
        fakeToolsRepository = new FakeToolsRepository();
        listAllToolsService = new ListAllToolsService(fakeToolsRepository);
    });
    it('should be able to list all tools', async () => {
        const firstTool = await fakeToolsRepository.store({
            title: 'First Tool',
            description: 'A super cool second tool',
            link: 'https://link.com',
        });
        const secondTool = await fakeToolsRepository.store({
            title: 'Second Tool',
            description: 'A super cool first tool',
            link: 'https://link.com',
        });
        const thirdTool = await fakeToolsRepository.store({
            title: 'Third Tool',
            description: 'A super cool third tool',
            link: 'https://link.com',
        });
        const tools = await listAllToolsService.execute();
        expect(tools).toEqual([firstTool, secondTool, thirdTool]);
    });
});
