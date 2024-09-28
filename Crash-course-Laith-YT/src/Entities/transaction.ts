import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client";

export enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn({})
  transactionId: number;

  @Column({
    type: "enum",
    enum: TransactionType,
  })
  type: string;

  @Column({
    type: "numeric",
  })
  amount: number;

  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({
    name: "clientId",
  })
  client: Client;
}
