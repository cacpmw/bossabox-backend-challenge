import Tool from '@modules/tools/infrastructure/typeorm/entities/Tool';
import IToolRepository from '@modules/tools/interfaces/classes/IToolRepository';
import IToolObject from '@modules/tools/interfaces/objects/IToolObject';
import { uuid } from 'uuidv4';

export default class FakeToolsRepository implements IToolRepository {
    private tools: Tool[] = [];

    public async store(tool: IToolObject): Promise<Tool> {
        const { title, link, description, tags } = tool;
        const newTool = new Tool();
        newTool.id = uuid();
        newTool.link = link;
        newTool.title = title;
        newTool.description = description;
        if (tags) {
            newTool.tags = tags;
        }
        this.tools.push(newTool);
        return newTool;
    }

    public async findByTitle(title: string): Promise<Tool | undefined> {
        return this.tools.find(currentTool => currentTool.title === title);
    }

    public async findById(id: string): Promise<Tool | undefined> {
        return this.tools.find(currentTool => currentTool.id === id);
    }

    public async all(): Promise<Tool[]> {
        return this.tools;
    }

    public async destroy(id: string): Promise<void> {
        const index = this.tools.findIndex(
            currentTool => currentTool.id === id,
        );
        this.tools.splice(index, 1);
    }
}
