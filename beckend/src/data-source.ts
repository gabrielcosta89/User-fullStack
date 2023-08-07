import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import path from "path";
import { Cliente, Contato } from "./entities.ts";


const DataSourceConfig = (): DataSourceOptions => {
  
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("missing env var: 'DATABASE_URL'");
  }
  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [Cliente,Contato],
    migrations: [migrationsPath],
  };
};

export const AppDataSource:DataSource = new DataSource(DataSourceConfig());
