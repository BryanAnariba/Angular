const { Schema, model } =  require('mongoose');

const UserModel = new Schema({
    nombreUsuario: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },
    playlists: {
        type: Array
    }
});


module.exports = {
    UserModel: model('Usuarios', UserModel),
};
