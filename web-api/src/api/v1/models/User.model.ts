import { model, Schema } from 'mongoose';
import { IUserModel, IUserDocument } from '../interfaces/User.interface';
import uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new Schema({
	firstName: {
		type: String,
		minlength: 1,
		trim: true,
		required: [true, 'First name required'],
	},
	lastName: {
		type: String,
		minlength: 1,
		trim: true,
		required: [true, 'Last name required'],
	},
	npiNumber: {
		type: String,
		minlength: 1,
		trim: true,
		required: [true, 'NPI number required'],
	},
	businessAddress: {
		type: String,
		minlength: 1,
		trim: true,
		required: [true, 'Business address required'],
	},
	phoneNumber: {
		type: String,
		minlength: 1,
		trim: true,
		required: [true, 'Phone number required'],
	},
	emailAddress: {
		type: String,
		minlength: 1,
		trim: true,
		unique: true,
		required: [true, 'Email address required'],
	},
});

UserSchema.plugin(uniqueValidator);

const User: IUserModel = model<IUserDocument, IUserModel>(
	'User',
	UserSchema,
	'users'
);

export default User;
