import Tool from '@modules/tools/infrastructure/typeorm/entities/Tool';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from 'typeorm';

@Entity('tags')
class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Tool, tool => tool.tags)
    tools: Tool[];

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tag;
