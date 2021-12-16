import { IUser } from '../interfaces/User.interface';
import User from '../models/User.model';

const signupUser = (info: IUser) => {
	let newGenderName = new User(info);

	return newGenderName.save().then((gender: IUser) => {
		return gender;
	});
};

export default {
	signupUser,
};
