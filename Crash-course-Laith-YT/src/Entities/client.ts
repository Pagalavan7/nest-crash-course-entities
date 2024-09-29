import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Transaction } from "./transaction";
import { Person } from "./utils/Person";
import { Bank } from "./banker";

@Entity()
export class Client extends Person {
  @Column({
    default: true,
    name: "active",
  })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];

  @ManyToMany(() => Bank)
  @JoinTable({
    name: "bankers_clients",
    joinColumn: {
      name: "client_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "bank_id",
      referencedColumnName: "id",
    },
  })
  banks: Bank[];
}
