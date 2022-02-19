import { Banker } from '../entities/Banker';
import { Client } from '../entities/Client';
import { Transaction } from '../entities/Transaction';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();
const connectToDB = createConnection({
	type: 'postgres',
	host: process.env.HOST || 'localhost',
	port: parseInt(<string>process.env.POSTGRES_PORT) ?? 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: 'bank',
	synchronize: true,
	entities: [Transaction, Client, Banker],
});

export { connectToDB };
