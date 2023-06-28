export interface User {
    _id?: string;
    nombreUsuario: string;
    playlists?: Playlist[];
}

export interface Playlist {
    _id?: string;
    tituloPlaylist: string;
    canciones: Cancion[]
}

export interface Cancion {
    nombreCancion: string;
    artista: string;
    album: string;
}