export interface Artist {
    _id?: string;
    nombreArtista: string;
    albumes?: Album[]
}

export interface Album {
    _id?: string;
    nombreAlbum: string;
    caratulaAlbum: string;
    canciones: Cancion[]
}

export interface Cancion {
    _id?: string; 
    nombreCancion: string;
    duracion: string;
}