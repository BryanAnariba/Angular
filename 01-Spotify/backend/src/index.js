require( 'dotenv' ).config();
require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );

const { Connection } = require( './config/DataBase' );
const { UserRouter } = require( './routes/UsersRoutes' );
const { ArtistRouter } = require( './routes/ArtistsRoutes' );
const { EndPoints } = require( './config/EndPoints' );

class Server {
    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.app.set( 'port', process.env.PORT || 4100 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );
    }

    routes () {
        this.app.use( EndPoints.users, UserRouter );
        this.app.use( EndPoints.artist, ArtistRouter );
    }

    staticFiles () {

    }

    start () {
        this.app.listen( this.app.get( 'port' ), () => {
            console.clear();
            console.log( `============================`.gray );
            console.log( `Server started on port: ${ this.app.get( 'port' ) }`.cyan );
        });
    }
}


const main = () => {
    const server = new Server();
    const connection = new Connection();
    server.start();
    connection.connectMe();
}   

main();