import { Document, Model } from 'mongoose';

const jwtSecret = '4994115566afdsfdofjs2269138329';

export interface IUser extends Document {
	phoneNumber: string;
	firstName: string;
}

export interface IUserDocument extends IUser {}

export interface IUserModel extends Model<IUserDocument> {}
