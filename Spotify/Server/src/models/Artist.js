const { Schema, model } =  require( 'mongoose' );

const ArtistModel = new Schema({
    nombreArtista: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    albumes: {
        type: Array
    }
});

module.exports = {
    ArtistModel: model( 'Artistas', ArtistModel ) 
};