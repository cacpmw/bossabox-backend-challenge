import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinTable,
    ManyToMany,
} from 'typeorm';
import Tag from './Tag';

@Entity('tools')
class Tool {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Tag, tag => tag.tools)
    @JoinTable({ name: 'tool_id' })
    tags: Tag[];

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tool;
