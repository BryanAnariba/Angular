const ArtistModel = require( '../models/Artist' );

class ArtistController {
    async getArtists ( req, res ) {
        try {
            const artists = await ArtistModel.find( {}, { albumes: false } );
            if ( !artists ) {
                return res.status( 200 ).json( { status: 200, data: 'Artists not found' } );
            } else {
                return res.status( 200 ).json( { status: 200, data: artists } ); 
            }
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }

    async getAlbumesOfOneArtist ( req, res ) {
        try {
            const { artistId } = req.params;
            const artistAlbumes = await ArtistModel.find( { _id: artistId }, { albumes: true } );
            if ( !artistAlbumes ) {
                return res.status( 200 ).json( { status: 200, data: 'Artist Albumes not found' } );
            } else {
                return res.status( 200 ).json( { status: 200, data: artistAlbumes[0] } );
            }
        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: `Han error has ocurred: ${ err }` } );
        }
    }
}

module.exports = {
    ArtistController,
}