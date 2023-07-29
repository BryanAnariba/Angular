import User from '../models/User.js';
import { UserEntity } from '../models/index.js';

export const findUserByEmail = async ( email ) => {
    return await UserEntity.findOne({ email: email }).populate('role', 'role');
}

export const findUserByUserName = async ( userName ) => {
    return await User.findOne({ userName: userName });
}

export const createUser = async ( user ) => {
    return await User.create( user );
}