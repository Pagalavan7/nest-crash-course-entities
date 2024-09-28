import { DataSource } from "typeorm";
import "dotenv/config";
import { Client } from "./Entities/client";

const dataSource = new DataSource({
  type: "mssql",
  host: process.env.DB_SERVER,
  port: 1433,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  options: {
    enableArithAbort: true,
    encrypt: true,
    trustServerCertificate: true,
  },
  entities: [Client],
  synchronize: true,
});

dataSource
  .initialize()
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err.message || err);
  });
