const { Router } = require( 'express' );
const UserRouter = Router();

// Users Web Services
// @Get => Playslist and their songs
UserRouter.get( '', ( req, res ) => {
    return res.json( {data: '@Get => Playslist and their songs'} );
});

// @Get => Playslist selected by user
UserRouter.get( '/:userId/playlist/:playlistId', ( req, res ) => {
    return res.json({ data: '@Get => Playslist selected by user' });
});

// @Get => Users Playlists
UserRouter.get( '/:userId/playlists', ( req, res ) => {
    return res.json( { data: '@Get => Users Playlists' } );
});

// @Post => Save Song In Playlist of one user
UserRouter.post( '/:userId/playlist/:playlistId/song', ( req, res ) => {
    return res.json( { data: '@Post => Save Song In Playlist of one user' } );
});

// @Post => Save a new Playlist

module.exports = {
    UserRouter,
};