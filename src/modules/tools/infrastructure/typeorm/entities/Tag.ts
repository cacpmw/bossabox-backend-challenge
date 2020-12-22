import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from 'typeorm';
import Tool from './Tool';

@Entity('tags')
class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Tool, tool => tool.tags)
    tools: Tool[];

    @Column()
    description: string;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tag;
