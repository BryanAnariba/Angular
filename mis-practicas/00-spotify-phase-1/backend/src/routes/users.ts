import { Router } from 'express';
import { createItem, createItemInPlaylist, getItems, getItemsByUserId, getItemsByUserIdAndPlaylistsId } from '../controllers/User';

const router: Router = Router();

/*
    TODO: rest services to do
        Obtener usuarios
        Obtener playlists de un usuario seleccionado
        Obtener playlist y canciones
        Guardar cancion en playlist
        Guardar nueva playlist
*/

// localhost:3500/api/users
router.get( '', getItems );

// localhost:3500/api/users/648a942bb205d86fc60ad3a2/playlists
router.get( '/:userId/playlists', getItemsByUserId );

// localhost:3500/api/users/648a942bb205d86fc60ad3a2/playlists/648a942bb205d86fc60ad39e/songs
router.get( '/:userId/playlists/:playlistId/songs', getItemsByUserIdAndPlaylistsId );

router.post( '/:userId/playlists/:playlistId/songs', createItemInPlaylist );

// localhost:3500/api/users/648a942bb205d86fc60ad3a2/playlists
router.post( '/:userId/playlists', createItem );



export { router };