import { Schema, model, Types } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: [ true, 'First Name is required' ],
      trim: true,
      uppercase: true,
    },
    lastName: {
      type: String,
      required: [ true, 'Last Name is required' ],
      trim: true,
      uppercase: true,
    },
    avatar: {
      type: String,
      default: '',
      trim: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: [ true, 'Email is required' ],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [ true, 'Password is required' ],
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = model<User>('User', userSchema);
export { userModel }