const { Types } = require( 'mongoose' );

const UserModel = require("../models/User");

class UserController {
    getUsers = async ( req, res ) => {
        try {
            const users = await UserModel.find( {}, { _id: true, nombreUsuario: true } );
            if ( !users ) {
                return res.status( 200 ).json( { status: 200, data: 'Not users found' } );
            } else {
                return res.status( 200 ).json( { status: 200, data: users } );
            }
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }

    getUserPlaylistSelected = async ( req, res ) => {
        try {
            const { userId, playlistId } = req.params;
            const userPlaylist = await UserModel.find( 
                { 
                    _id: userId,
                    "playlists._id": Types.ObjectId( playlistId )
                },
                {
                    "playlists.$": true // como solo queremos una playlist seleccionada por un usuario con el .$ la obtenemos solo esa
                }
            );
            if ( !userPlaylist ) {
                return res.status( 200 ).json( { status: 200, data: 'Not users and pleylists found' } );
            } else {
                return res.status( 200 ).json( { status: 200, data: userPlaylist[0] } );
            }
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }

    getUserPlaylists = async ( req, res ) => {
        try {
            const { userId } = req.params;
            const userPlaylists = await UserModel.find( { _id:  Types.ObjectId( userId ) }, { playlists: true } );
            if ( userPlaylists.length === 0 ) {
                return res.status( 200 ).json( { status: 200, data: "Playlists not found" } );
            } else {
                return res.status( 200 ).json( { status: 200, data: userPlaylists[0] } );
            }
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }

    savePlaylists = async ( req, res ) => {
        try {
            const { userId } = req.params;
            const { tituloPlaylist } = req.body;
            const updated = await UserModel.findByIdAndUpdate( 
                { _id: Types.ObjectId( userId ) },
                {
                    $push: {
                        playlists: {
                            _id: Types.ObjectId(),
                            tituloPlaylist: tituloPlaylist,
                            canciones: []
                        }
                    }
                }
            );
            return res.status( 200 ).json( { status: 200, data: updated } );
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }

    saveSongInPlaylist = async ( req, res ) => {
        try {
            const { userId, playlistId } =  req.params;
            const { nombreCancion, artista, album } = req.body;
            const addSongInPlaylist = await UserModel.findOneAndUpdate(
                {
                    _id: userId,
                    "playlists._id": Types.ObjectId( playlistId )
                },
                {
                    $push: {
                        "playlists.$.canciones": {
                            nombreCancion: nombreCancion,
                            artista: artista,
                            album: album
                        }
                    }
                }
            );
            return res.status( 200 ).send( { status: 200, data: addSongInPlaylist } );
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }
}

module.exports = { UserController, };

/*
    // OJO AQUI ENTRAMOS AL ARREGLO DE PLAYLISTS PARA ANEXAR
    db.users.update(
    { _id: ObjectId('62578b023cb146faa3669fb3') },
    { $push: {
            playlists: {
                _id: ObjectId(),
                tituloPlaylist: 'Perreo Intenso BRRRRRRR UAAAA',
                canciones: []
            }
        }}
    );

    // OJO AQUI ENTRAMOS HASTA EL ARREGLO DE CANCIONES PARA ANEXAR OSEA MAS PROFUNDO DENTRO DE LA COLECCION
    db.users.update(
        { 
            _id: ObjectId('62578b023cb146faa3669fb3'),
            "playlists._id": ObjectId('62578b023cb146faa3669fae')
        },
        {
            $push: {
                "playlists.$.canciones": {
                    nombreCancion: 'Secreto',
                    artista:  'Anuel AA',
                    album: 'BRRRRR'
                }
            }
        }
    )
*/