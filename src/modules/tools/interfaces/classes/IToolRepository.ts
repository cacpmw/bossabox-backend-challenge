import Tool from '@modules/tools/infrastructure/typeorm/entities/Tool';
import IToolObject from '../objects/IToolObject';

export default interface IToolRepository {
    store(tool: IToolObject): Promise<Tool>;
    findByTitle(title: string): Promise<Tool | undefined>;
    all(): Promise<Tool[]>;
    destroy(id: string): Promise<void>;
    findById(id: string): Promise<Tool | undefined>;
}
