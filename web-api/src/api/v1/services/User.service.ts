import { IUser } from '../interfaces/User.interface';
import userRepositories from '../repositories/User.repository';

const signupUser = (info: IUser) => {
	return userRepositories.signupUser(info);
};

const getAllUsers = () => {
	return userRepositories.getAllUsers();
};

export default {
	signupUser,
	getAllUsers,
};
