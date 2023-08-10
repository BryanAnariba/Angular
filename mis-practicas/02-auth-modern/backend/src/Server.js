import 'dotenv/config';
import 'colors';
import express from 'express';
import cors from 'cors';

import { connectDB } from './config/Connection.js';
import indexRoutes from './routes/index.js';

export class Server {

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 5000 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes () {
        this.app.use( '/api', indexRoutes );
    }

    async startApp () {
        try {
            const result = await connectDB();
            await this.app.listen( this.app.get('PORT') );
            console.log( `================================================================`.red );
            console.log( `Node JS Server started on port: ${ this.app.get('PORT') }`.cyan );
            console.log( `MongoDB Connected on: ${ result.connection.host }`.cyan )
            console.log( `================================================================`.red );
        } catch ( error ) {
            throw new Error( `Error: ${ error }` );
        }
    }

}