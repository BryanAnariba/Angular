import 'colors';
import express from 'express';
import cors from 'cors';
import { endPoints } from './config/endPoints.js';
import { authRoutes } from './routes/Auth.routes.js';

export class Server {

    constructor () {
        this.app =  express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();    
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 8888 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );
    }

    routes () {
        this.app.use( endPoints.users, authRoutes );
    }

    staticFiles () {

    }

    startServer () {
        this.app.listen( this.app.get( 'PORT' ), () => {
            console.clear();
            console.log( `============================`.blue );
            console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            console.log( `============================`.blue );
        }); // 17:30
    }
}

