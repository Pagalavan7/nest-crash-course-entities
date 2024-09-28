import { BaseEntity, Column } from "typeorm";
import { Person } from "./utils/Person";

export class Bank extends Person {
  @Column({ unique: true, length: 10 })
  employeeNumber: string;
}
