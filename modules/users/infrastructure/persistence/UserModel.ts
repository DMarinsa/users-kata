import { Schema, model, Document } from 'mongoose';
import { Id } from '../../../shared/domain/types';
import { User } from '../../domain/User';

const UserSchema:Schema = new Schema({
  name: String,
  surname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  country: String,
  phone: String,
  postalCode: String,
__v: {
    type: Number,
    select: false,
  },
});

export interface UserDocument extends Document, User{
  _id: Id;
}

export const UserModel = model<UserDocument>('BotConfiguration', UserSchema);
