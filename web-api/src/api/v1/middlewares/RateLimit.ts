import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

export const rateLimiterThreeSeconds = rateLimit({
	windowMs: 3000, // 3 second window
	max: 10, // start blocking after 5 requests
	message: 'Too many requests, please try again later.',
	onLimitReached: async (req: Request, res: Response, options: any) => {
		const error = 'Rate limit hit for ' + req.route.path;
	},
});
