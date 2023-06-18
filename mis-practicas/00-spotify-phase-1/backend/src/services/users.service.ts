import { User } from "../interfaces/user.interface";
import { UserModel } from "../models";
import mongoose from 'mongoose';

export const getUser = async (): Promise<User[]> => {
    return await UserModel.find({}, { nombreUsuario: true });
}

export const getPlaylistsUser = async ( userId: string ): Promise<User[]> => {
    return await UserModel.find({ _id: userId }, { playlists: true });
}

export const getSongsOfOnePlaylistByUser = async ( userId: string, playlistId: string ): Promise<User[]> => {
    return await UserModel.find(
        {
            _id: userId,
            "playlists._id": new mongoose.Types.ObjectId(playlistId)
        },
        {
            "playlists.$": true
        }
    );
} 

38