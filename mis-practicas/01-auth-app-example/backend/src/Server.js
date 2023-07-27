import 'colors';
import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.js';
import { connectDB } from './config/database.js';

class Server {
    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 33500 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes () {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles () {

    }

    async start () {
        try {
            console.log('=============================================================='.yellow);
            const [ server, db ] = await Promise.all(
                [
                    this.app.listen( this.app.get('PORT')),
                    connectDB()
                ]
            );
            console.log( `NodeJS Server started on port: ${ this.app.get('PORT') }`.green );
            console.log( `MongoDB Started at: ${ db.connection.host }`.green )
            console.log('=============================================================='.yellow);
        } catch ( err ) {
            throw Error( `Error: ${ err }` )
        }
    }
}

export { Server };