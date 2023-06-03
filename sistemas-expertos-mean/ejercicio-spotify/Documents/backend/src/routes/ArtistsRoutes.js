const { Router } = require( 'express' );
const ArtistRouter = Router();

const { ArtistController } = require('../controllers/ArtistController');
const ArtistCtrl = new ArtistController();

// Artists Web Services
// @Get => Artists List localhost:3500/api/artists
ArtistRouter.get( '', ArtistCtrl.getArtists );

// @Get => Albumes with Songs of artists selected  localhost:3500/api/artists/:artistId/albumes
ArtistRouter.get( '/:artistId/albumes', ArtistCtrl.getAlbumesOfOneArtist );

module.exports = {
    ArtistRouter,
};