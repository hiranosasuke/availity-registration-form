require('dotenv').config();
import express, { Request, Response } from 'express';
import { applyV1Routes } from './config/index';
import { applySwagger } from './config/swagger.config';
import routes from './api/v1/routes/index';

const app = express();

applyV1Routes(routes, app);
applySwagger(app);

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
