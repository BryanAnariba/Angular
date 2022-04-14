const { Router } = require( 'express' );
const UserRouter = Router();

const { UserController } = require('../controllers/UserController');
const UserCtrl =  new UserController();

// Users Web Services
// @Get => Users http://localhost:3500/api/users
UserRouter.get( '', UserCtrl.getUsers );

// @Get => Playslist selected by user http://localhost:3500/api/users/:userId/playlists/:playlistId 
UserRouter.get( '/:userId/playlists/:playlistId', UserCtrl.getUserPlaylistSelected );

// @Get => Users Playlists http://localhost:3500/api/users/:userId/playlists
UserRouter.get( '/:userId/playlists', UserCtrl.getUserPlaylists );

// @Post => Save Song In Playlist of one user http://localhost:3500/api/users/:userId/playlists/:playlistId/songs
UserRouter.post( '/:userId/playlists/:playlistId/songs', UserCtrl.saveSongInPlaylist );

// @Post => Save a new Playlist http://localhost:3500/api/users/:userId/playlists
UserRouter.post( '/:userId/playlists', UserCtrl.savePlaylists );


module.exports = {
    UserRouter,
};