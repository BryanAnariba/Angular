
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models"

export const getUserByEmail = async ( email: string ) => {
    return await UserModel.findOne({ email: email });
}

export const createUser = async ( user: User ) => {
    return await UserModel.create( user );
}