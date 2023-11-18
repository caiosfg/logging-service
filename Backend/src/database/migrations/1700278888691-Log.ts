import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Log1700278888691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'logs',
                columns: [
                    {
                        name: 'id_log',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name: 'ip',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'date',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'type',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'text',
                        type: 'string',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('logs')
    }

}
