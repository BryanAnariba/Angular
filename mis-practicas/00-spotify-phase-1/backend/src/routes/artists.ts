import { Router } from 'express';

const router: Router = Router();

/*
    TODO: rest services to do
        Obtener artistas
        Obtener albumez y canciones de un artista seleccionado
*/

// Obtener artistas
router.get( '', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Artists Works' })
});

// Obtener albumez y canciones de un artista seleccionado
router.get( '/:artistId/albumes', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Artists-Albumes Works' })
});

export { router };