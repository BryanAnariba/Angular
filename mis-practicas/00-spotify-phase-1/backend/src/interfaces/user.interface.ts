export interface User {
    _id?: string;
    nombreUsuario: string;
    playlists?: Playlist[];
    timestamps?: boolean;
    versionKey?: boolean;
}

export interface Playlist {
    _id?: string;
    tituloPlaylist: string;
    canciones: Cancion[]
}

export interface Cancion {
    _id?: string;
    nombreCancion: string;
    artista: string;
    album: string;
}