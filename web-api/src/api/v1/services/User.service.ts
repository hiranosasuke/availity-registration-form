import { IUser } from '../interfaces/User.interface';
import userRepositories from '../repositories/User.repository';

const signupUser = (info: IUser) => {
	return userRepositories.signupUser(info);
};

export default {
	signupUser,
};
