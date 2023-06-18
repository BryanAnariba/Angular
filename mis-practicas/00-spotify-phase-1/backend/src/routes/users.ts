import { Router } from 'express';
import { getItems, getItemsByUserId, getItemsByUserIdAndPlaylistsId } from '../controllers/User';

const router: Router = Router();

/*
    TODO: rest services to do
        Obtener usuarios
        Obtener playlists de un usuario seleccionado
        Obtener playlist y canciones
        Guardar cancion en playlist
        Guardar nueva playlist
*/

router.get( '', getItems );

router.get( '/:userId/playlists', getItemsByUserId );

router.get( '/:userId/playlists/:playlistId/songs', getItemsByUserIdAndPlaylistsId );

router.post( '/:userId/playlists/:playlistId/songs', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Save song in Playlist Works' })
});

router.post( '/:userId/playlists', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Save new playlist Works' })
});



export { router };