import 'reflect-metadata';
import DeleteToolService from '@modules/tools/services/DeleteToolService';
import FakeToolsRepository from './repositories/FakeToolsRepository';

let fakeToolsRepository: FakeToolsRepository;
let deleteToolService: DeleteToolService;

describe('DeleteTool', () => {
    beforeEach(() => {
        fakeToolsRepository = new FakeToolsRepository();
        deleteToolService = new DeleteToolService(fakeToolsRepository);
    });
    it('should be able to delete a tool', async () => {
        await fakeToolsRepository.store({
            title: 'First Tool',
            description: 'A super cool second tool',
            link: 'https://link.com',
        });
        await fakeToolsRepository.store({
            title: 'Second Tool',
            description: 'A super cool first tool',
            link: 'https://link.com',
        });
        const thirdTool = await fakeToolsRepository.store({
            title: 'Third Tool',
            description: 'A super cool third tool',
            link: 'https://link.com',
        });
        await deleteToolService.execute(thirdTool.id);
        const tools = await fakeToolsRepository.all();
        expect(tools.length).toBe(2);
    });
});
