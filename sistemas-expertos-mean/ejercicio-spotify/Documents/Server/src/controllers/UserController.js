const { UserModel } = require("../models/User");
const { Types } = require('mongoose');

class UserController {

    async getPlaylists ( req, res ) {
        const { userId } = req.params;
        try {
            const playlists = await UserModel.find({ _id: Types.ObjectId(userId) });
            return res.status( 200 ).send({
                status: 200,
                data: playlists[0]
            });
        } catch ( error ) {
            return res.status( 400 ).send({
                status: 400,
                data: error
            });
        }
    }

    async getPlaylistWithSongs ( req, res ) {
        const { userId, playlistId } = req.params;
        try {
            const playlist = await UserModel.find({ 
                _id: userId, 
                "playlists._id": Types.ObjectId(playlistId)
            },{
                "playlists.$": true
            });
            return res.status( 200 ).send({
                status: 200,
                data: playlist[0]
            });
        } catch ( error ) {
            return res.status( 400 ).send({
                status: 400,
                data: error
            });
        }
    }

    
    async getUsers ( req, res ) {
        try {
            const users = await UserModel.find({}, { nombreUsuario: true });
            return res.status( 200 ).send({
                status: 200,
                data: users
            });
        } catch ( error ) {
            return res.status( 400 ).send({
                status: 400,
                data: error
            });
        }
    }

    async saveSongInPlaylist ( req, res ) {
        const { userId, playlistId } = req.params;
        const { nombreCancion, artista, album } = req.body;

        try {
            const saved = await UserModel.updateOne({ 
                _id: Types.ObjectId( userId ) ,
                "playlists._id": Types.ObjectId( playlistId )
            },{
                $push: {
                    "playlists.$.canciones": {
                        nombreCancion: nombreCancion,
                        artista: artista,
                        album: album
                    }
                }
            });

            return res.status( 200 ).send({
                status: 200,
                data: saved
            });
        } catch ( error ) {
            return res.status( 400 ).send({
                status: 400,
                data: error
            });
        }
    }

    async savePlaylist ( req, res ) {
        const { userId } = req.params;
        const { tituloPlaylist } = req.body;
        try {
            const updated = await UserModel.updateOne({ _id: Types.ObjectId( userId ) },{
                $push: {
                    playlists: {
                        _id: Types.ObjectId(),
                        tituloPlaylist: tituloPlaylist,
                        canciones: []
                    }
                }
            });

            return res.status( 200 ).send({
                status: 200,
                data: updated
            });
        } catch ( error ) {
            return res.status( 400 ).send({
                status: 400,
                data: error
            });
        }
    }
}

module.exports = { UserController, };