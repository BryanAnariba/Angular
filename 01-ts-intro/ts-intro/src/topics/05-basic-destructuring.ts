console.log('======05-BASIC-DESTRUCTURING=======');

interface IAudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: IDetail;
}

interface IDetail {
    author: string;
    year: number;
}

const audioPlayer: IAudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Buyaka',
    details: {
        author: 'GUAYNA',
        year: 2016
    }
};

// Objects Desestructuring
const { song, songDuration: duration } = audioPlayer;
const { details } = audioPlayer;
const { author } = details;

console.log( `Player \nSong: ${ song }\nAuthor: ${ author }\nDuration: ${ duration }` );

// Arrays Desestructuring
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log( dbz );
const [ p1, p2, trunks = 'Not Found' ] = dbz;
console.log(`Personaje Tres: ${ trunks }`);


export {};