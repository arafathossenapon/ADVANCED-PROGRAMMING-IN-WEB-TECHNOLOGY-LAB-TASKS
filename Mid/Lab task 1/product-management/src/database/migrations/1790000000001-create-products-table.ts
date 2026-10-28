import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1790000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "gen_random_uuid()",
          },
          { name: "name", type: "varchar", isNullable: false },
          { name: "category", type: "varchar", isNullable: false },
          { name: "price", type: "numeric", precision: 10, scale: 2, isNullable: false },
          { name: "quantity", type: "int", isNullable: false },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
