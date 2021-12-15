import { model, Schema } from 'mongoose';
import { IUserModel, IUserDocument } from '../interfaces/User.interface';

export const UserSchema = new Schema({
	phoneNumber: {
		type: String,
		trim: true,
		required: [true, 'User phone number required'],
	},
	firstName: {
		type: String,
		minlength: 1,
		trim: true,
		required: [true, 'User first name required'],
	},
});

const User: IUserModel = model<IUserDocument, IUserModel>(
	'User',
	UserSchema,
	'users'
);

export default User;
