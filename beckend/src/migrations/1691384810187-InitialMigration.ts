import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691384810187 implements MigrationInterface {
    name = 'InitialMigration1691384810187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cliente" ("id" SERIAL NOT NULL, "nomeCompleto" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "dataDeRegistro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6b00ec12b8a60095cc4389d35d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Contato" ("id" SERIAL NOT NULL, "nomeCompleto" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "dataDeRegistro" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" integer, CONSTRAINT "PK_98afb373bb13482e3e639c4935e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Contato" ADD CONSTRAINT "FK_5be01483fcbf0fdcbc88ad4a88b" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contato" DROP CONSTRAINT "FK_5be01483fcbf0fdcbc88ad4a88b"`);
        await queryRunner.query(`DROP TABLE "Contato"`);
        await queryRunner.query(`DROP TABLE "Cliente"`);
    }

}
