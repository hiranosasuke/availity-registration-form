import { Request, Response, NextFunction } from 'express';
import userServices from '../services/User.service';
import { ClientResponse } from '../utilities/client-response';

const signupUser = async (req: Request, res: Response) => {
	try {
		const user = await userServices.signupUser(req.body);
		const result = new ClientResponse(true, user, '');
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
};

const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await userServices.getAllUsers();
		const result = new ClientResponse(true, users, '');
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
};

const getUserByEmail = async (req: Request, res: Response) => {
	try {
		const users = await userServices.getUserByEmail(<string>req.query.email);
		const result = new ClientResponse(true, users, '');
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
};

export default {
	signupUser,
	getAllUsers,
	getUserByEmail,
};
