require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import { applyV1Routes } from './config/index';
import { applySwagger } from './config/swagger.config';
import routes from './api/v1/routes/index';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { Error } from 'mongoose';
import http from 'http';

const app = express();
app.use(bodyParser.json({ limit: '40mb' }));

app.use(cors({ credentials: true, origin: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
	// update to match the domain you will make the request from
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id, user-id'
	);

	res.header(
		'Access-Control-Expose-Headers',
		'x-access-token, x-refresh-token'
	);
	next();
});

applyV1Routes(routes, app);
applySwagger(app);

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () => {
	if (PORT == 3000) {
		console.log(`Server is running http://localhost:${PORT}...`);
	} else {
		console.log(`Server is running on... ${PORT}`);
	}

	connectToMongo();
});

export const connectToMongo = () => {
	mongoose
		.connect(
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hnr7f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
		)
		.then(() => {
			console.log(`Connected to Mongo *${process.env.DB_NAME}* DB :)`);
		})
		.catch((e: Error) => {
			console.log('Error while attempting to connect MongoDB');
			console.log(e);
		});
};
