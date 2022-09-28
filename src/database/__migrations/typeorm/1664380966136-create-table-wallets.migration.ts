import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableWalletsMigration1664380966136 implements MigrationInterface {
    name = 'createTableWalletsMigration1664380966136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account-logs" ("id" SERIAL NOT NULL, CONSTRAINT "PK_986b40d167553a984b46c2ee510" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account-logs"`);
    }

}
