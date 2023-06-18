import { Schema, model } from "mongoose";
import { Artist } from "../interfaces/artist.interface";

const artistsSchema = new Schema<Artist>({
    nombreArtista: {
        type: String,
        required: [ true, 'Nombre Artista is required' ]
    },
    albumes: Array
},
{
    timestamps: true,
    versionKey: false
});

export default model<Artist>('Artist', artistsSchema);