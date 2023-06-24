import { Request, Response } from "express";
import { handleHttpResponse } from "../utils/handleHttpResponse";
import { getAllArtists, getArtistAlbumes } from "../services/artists.service";

let statusCode: number = 0;

export const getItems = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200
        const artistsResponse = await getAllArtists();
        return res.status(statusCode).json({ statusCode: statusCode, data: artistsResponse });
    } catch (error) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpResponse( res, statusCode, 'HTTP_GET_USER_SONGS_PLAYLIST_ERROR', error );
    }
}

export const getItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200
        const { artistId } = req.params;
        const artistsResponse = await getArtistAlbumes(artistId);
        return res.status(statusCode).json({ statusCode: statusCode, data: artistsResponse });
    } catch (error) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpResponse( res, statusCode, 'HTTP_GET_USER_SONGS_PLAYLIST_ERROR', error );
    }
}