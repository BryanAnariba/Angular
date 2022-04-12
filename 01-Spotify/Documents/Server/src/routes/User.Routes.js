const { Router } = require('express');
const { UserController } = require('../controllers/UserController');

const USERCTRL = new UserController();
const router= Router();

// Users Services
//     1 - Get one Playlists and their songs
//     2 - Get Playlists songs
//     3 - Get Users
//     4 - Save song in playlist
//     5 - Save new playlist

//     1 - Get one Playlists and their songs
router.get( '/:userId/playlist/:playlistId', USERCTRL.getPlaylistWithSongs);

//     2 - Get Playlists songs
router.get( '/:userId/playlists', USERCTRL.getPlaylists );

//     3 - Get Users
router.get( '', USERCTRL.getUsers );

//     4 - Save song in playlist
router.post( '/:userId/playlist/:playlistId/song', USERCTRL.saveSongInPlaylist );

//     5 - Save new playlist
router.post( '/:userId/playlist', USERCTRL.savePlaylist );

module.exports = router;