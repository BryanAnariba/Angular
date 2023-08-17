
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models"

export const getUserByEmail = async ( email: string ) => {
    return await UserModel.findOne({ email: email }).populate('role', 'roleName');
}

export const createUser = async ( user: User ) => {
    return await UserModel.create( user );
}

export const getUsers = async ( limit: number, skip: number ) => {
    return await Promise.all(
        [
            UserModel.countDocuments(),
            UserModel.find( {},{ password: false, createdAt: false, updatedAt: false } ).limit( limit ).skip( skip ).populate( 'role', 'roleName' ),
        ]
    );
}

export const getUserWithOutPwd = async ( userId: string ): Promise<User | null> => {
    return await UserModel.findOne({ _id: userId }, { password: false, createdAt: false, updatedAt: false }).populate( 'role', 'roleName' );
}

export const getUserById = async ( userId: string ): Promise<User | null> => {
    return await UserModel.findOne({ _id: userId }, { password: false });
}