import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createToolTagsTable1608673411158
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tool_tags',
                columns: [
                    {
                        name: 'tool_id',
                        type: 'uuid',
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: 'tag_id',
                        type: 'uuid',
                        isNullable: false,
                        isPrimary: true,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['tool_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'tools',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                        name: 'fk_tool_tags_tools_tool_id',
                    },
                    {
                        columnNames: ['tag_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'tags',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                        name: 'fk_tool_tags_tags_tag_id',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tool_tags');
    }
}
