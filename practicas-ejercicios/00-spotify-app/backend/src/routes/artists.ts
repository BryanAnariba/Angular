import { Router } from 'express';
import { getItem, getItems } from '../controllers/Artist';

const router: Router = Router();

/*
    TODO: rest services to do
        Obtener artistas
        Obtener albumes y canciones de un artista seleccionado
*/

// localhost:3500/api/artists
router.get( '', getItems );

// localhost:3500/api/artists/648a9415b205d86fc60ad397/albumes
router.get( '/:artistId/albumes', getItem );

export { router };