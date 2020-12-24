import 'reflect-metadata';
import ShowToolService from '@modules/tools/services/ShowToolService';
import RequestError from '@shared/exceptions/RequestError';
import FakeToolsRepository from './repositories/FakeToolsRepository';

let fakeToolsRepository: FakeToolsRepository;
let showToolService: ShowToolService;

describe('ShowTool', () => {
    beforeEach(() => {
        fakeToolsRepository = new FakeToolsRepository();
        showToolService = new ShowToolService(fakeToolsRepository);
    });
    it('should be able to show a tool by id', async () => {
        const tool = await fakeToolsRepository.store({
            description: 'Tool Description',
            link: 'http://localhost',
            title: 'Some Tool',
        });
        const foundTool = await showToolService.execute(tool.id);

        expect(foundTool.id).toBe(tool.id);
    });

    it('should not be able to show a tool by invalid id', async () => {
        await fakeToolsRepository.store({
            description: 'Tool Description',
            link: 'http://localhost',
            title: 'Some Tool',
        });

        await expect(
            showToolService.execute('invalid-id'),
        ).rejects.toBeInstanceOf(RequestError);
    });
});
