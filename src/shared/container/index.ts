import TagsRepository from '@modules/tags/infrastructure/typeorm/repositories/TagsRepository';
import ITagRepository from '@modules/tags/interfaces/classes/ITagRepository';
import ToolsRepository from '@modules/tools/infrastructure/typeorm/repositories/ToolsRepository';
import IToolRepository from '@modules/tools/interfaces/classes/IToolRepository';
import { container } from 'tsyringe';

container.registerSingleton<ITagRepository>('TagsRepository', TagsRepository);
container.registerSingleton<IToolRepository>(
    'ToolsRepository',
    ToolsRepository,
);
