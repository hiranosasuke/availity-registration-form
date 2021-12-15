import { Router, Express } from 'express';

export const applyV1Routes = (routes: Router[], app: Express) => {
	for (const route of routes) {
		app.use('/api/v1/', route);
	}
};
