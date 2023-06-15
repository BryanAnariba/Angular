import { Router } from 'express';

const router: Router = Router();

/*
    TODO: rest services to do
        Obtener usuarios
        Obtener playlists
        Obtener playlist y canciones
        Guardar cancion en playlist
        Guardar nueva playlist
*/

router.get( '', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Users Works' })
});

router.get( '/:uid/playlists', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Users-Playlists Works' })
});

router.get( '/:uid/playlists/:playlistId/songs', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Users-Playlist-Song Works' })
});

router.post( '/:uid/playlists/:playlistId/songs', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Save song in Playlist Works' })
});

router.post( '/:uid/playlists', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Save new playlist Works' })
});



export { router };