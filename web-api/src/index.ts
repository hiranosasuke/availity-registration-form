require('dotenv').config();
import express from 'express';
import { applyV1Routes } from './config/index';
import { applySwagger } from './config/swagger.config';
import routes from './api/v1/routes/index';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({ limit: '40mb' }));

app.use(cors({ credentials: true, origin: true }));
app.use((req: any, res: any, next: any) => {
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

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
