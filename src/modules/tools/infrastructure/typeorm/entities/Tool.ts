import Tag from '@modules/tags/infrastructure/typeorm/entities/Tag';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinTable,
    ManyToMany,
} from 'typeorm';

@Entity('tools')
class Tool {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Tag, tag => tag.tools)
    @JoinTable({
        name: 'tool_tags',
        joinColumn: {
            name: 'tool_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'tag_id',
            referencedColumnName: 'id',
        },
    })
    tags: Tag[];

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tool;
