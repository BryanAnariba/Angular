const { Router } = require( 'express' );
const ArtistRouter = Router();

// Artists Web Services
// @Get => Artists List
ArtistRouter.get( '', ( req, res ) => {
    return res.json({ data: '@Get => Artists List' })
});

// @Get => Albumes with Songs of artists selected 
ArtistRouter.get( '/:artistId/albumes', ( req, res ) => {
    return res.json({ data: '@Get => Albumes with Songs of artists selected' });
});

module.exports = {
    ArtistRouter,
};