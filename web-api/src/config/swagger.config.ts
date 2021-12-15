import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions: swaggerJSDoc.Options = {
	definition: {
		info: {
			title: 'Project API',
			description: 'Project API Documentation',
			version: '1.0.0',
			contact: {
				name: 'me',
			},
			servers: ['http://localhost:3000'],
		},
	},
	apis: ['src/api/v1/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const applySwagger = (app: Express) => {
	app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
