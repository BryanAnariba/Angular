const { model, Schema }  = require( 'mongoose' );

const ArtistModel = new Schema({
    nombreArtista: {
        type: String,
        required: true
    },
    albumes: {
        type: Array,
    },
});

module.exports = model( 'artists', ArtistModel );