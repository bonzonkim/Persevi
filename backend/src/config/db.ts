import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

const {
    DB_DATABASE,
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
} = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Database connection established successfully")
    })
    .catch((e) => {
        console.error(e);
    })