import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  // numeric columns come back from Postgres as strings, so convert to number
  @Column({
    type: "numeric",
    precision: 10,
    scale: 2,
    transformer: {
      to: (value?: number) => value,
      from: (value?: string | null) =>
        value === null || value === undefined ? value : parseFloat(value),
    },
  })
  price!: number;

  @Column({ type: "int" })
  quantity!: number;
}
