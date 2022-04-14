const { model, Schema } = require( 'mongoose' );

const UserModel = new Schema({
    nombreUsuario: {
        type: String, 
        required: true
    },
    playlists: {
        type: Array
    }
});

module.exports = model( 'users', UserModel );