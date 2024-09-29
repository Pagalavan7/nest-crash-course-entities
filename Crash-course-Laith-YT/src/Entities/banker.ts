import { BaseEntity, Column, ManyToMany } from "typeorm";
import { Person } from "./utils/Person";
import { Client } from "./client";

export class Bank extends Person {
  @Column({ unique: true, length: 10 })
  employeeNumber: string;

  @ManyToMany(() => Client)
  clients: Client[];
}
