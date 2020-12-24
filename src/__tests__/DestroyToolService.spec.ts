import 'reflect-metadata';
import RequestError from '@shared/exceptions/RequestError';
import DestroyToolService from '@modules/tools/services/DestroyToolService';
import FakeToolsRepository from './repositories/FakeToolsRepository';

let fakeToolsRepository: FakeToolsRepository;
let destroyToolService: DestroyToolService;

describe('DestroyTool', () => {
    beforeEach(() => {
        fakeToolsRepository = new FakeToolsRepository();
        destroyToolService = new DestroyToolService(fakeToolsRepository);
    });
    it('should be able to destroy a tool by id', async () => {
        const tool = await fakeToolsRepository.store({
            description: 'Tool Description',
            link: 'http://localhost',
            title: 'Some Tool',
        });
        await destroyToolService.execute(tool.id);
        const tools = await fakeToolsRepository.all();
        expect(tools.length).toBe(0);
    });

    it('should not be able to delete a tool by invalid id', async () => {
        await fakeToolsRepository.store({
            description: 'Tool Description',
            link: 'http://localhost',
            title: 'Some Tool',
        });

        await expect(
            destroyToolService.execute('invalid-id'),
        ).rejects.toBeInstanceOf(RequestError);
    });
});
