import { connectToDB } from './config/db';
import express from 'express';
import cors from 'cors';
const app = express();

const options: cors.CorsOptions = {
	origin: ['http://localhost:3000'],
};
app.use(cors(options));
app.use(express.json());

const main = async () => {
	try {
		await connectToDB;
		console.log(`Conneted on Port ${process.env.POSTGRES_PORT}`);
		app.listen(process.env.PORT, () => {
			console.log(`server listening to port ${process.env.PORT}`);
		});
	} catch (error) {
		console.error(error);
		console.log('Error connecting to the database');
	}
};

main();
