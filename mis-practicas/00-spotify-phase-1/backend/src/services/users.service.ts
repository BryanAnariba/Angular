import { Cancion, User } from "../interfaces/user.interface";
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

export const savePlaylist = async ( userId: string, tituloPlaylist: string ): Promise<User | null> => {
    return await UserModel.findByIdAndUpdate(
        { _id: userId },
        {
            $push: {
                playlists: {
                    _id: new mongoose.Types.ObjectId(),
                    tituloPlaylist: tituloPlaylist,
                    canciones: []
                }
            }
        },
        {
            new: true
        }
    );
}

export const saveSongInPlaylist = async  ( userId:string, playlistId: string, datosCancion: Cancion ): Promise< User | null > => {
    return await UserModel.findOneAndUpdate(
        { 
            _id: new mongoose.Types.ObjectId(userId),
            "playlists._id": new mongoose.Types.ObjectId(playlistId)
        },
        {
            $push: {
                "playlists.$.canciones": {
                    nombreCancion: datosCancion.nombreCancion,
                    artista: datosCancion.artista,
                    album: datosCancion.album
                }
            }
        },
        {
            new: true
        }
    );
}
