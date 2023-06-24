import { Artist } from "../interfaces/artist.interface";
import { ArtistModel } from "../models";

export const getAllArtists = async (): Promise<Artist[]> => {
    return await ArtistModel.find({}, { albumes: false });
}

export const getArtistAlbumes = async ( artistId: string ): Promise<Artist | null> => {
    return await ArtistModel.findOne({ _id: artistId });
}