import TagsRepository from '@modules/tools/infrastructure/typeorm/repositories/TagsRepository';
import ITagRepository from '@modules/tools/interfaces/classes/ITagRepository';
import { container } from 'tsyringe';

container.registerSingleton<ITagRepository>('TagsRepository', TagsRepository);
