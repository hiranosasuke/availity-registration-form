import { IUser } from '../interfaces/User.interface';
import User from '../models/User.model';

const signupUser = (info: IUser) => {
	let newUser = new User(info);

	return newUser.save().then((user: IUser) => {
		return user;
	});
};

const getAllUsers = () => {
	return User.find()
		.sort({ firstName: 1 })
		.then((users: IUser[]) => {
			return users;
		});
};

const getUserByEmail = (email: string) => {
	return User.findOne({ emailAddress: email }).then((users: IUser | null) => {
		return users!;
	});
};

export default {
	signupUser,
	getAllUsers,
	getUserByEmail,
};
