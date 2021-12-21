import { IUser } from '../interfaces/User.interface';
import userRepositories from '../repositories/User.repository';

const signupUser = (info: IUser) => {
	return userRepositories.signupUser(info);
};

const getAllUsers = () => {
	return userRepositories.getAllUsers();
};

const getUserByEmail = (email: string) => {
	return userRepositories.getUserByEmail(email);
};

export default {
	signupUser,
	getAllUsers,
	getUserByEmail,
};
