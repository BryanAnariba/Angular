import 'colors';
import express, { Application } from "express";
import cors from 'cors';

import indexRoutes from './routes/index';
import { connectDB } from './database/Connection';

export class Server {
    app!: Application;

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings (): void {
        this.app.set( 'PORT', process.env.PORT || 5000 );
    }

    middlewares (): void {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes (): void {
        this.app.use( '/api', indexRoutes );
    }

    async startServer (): Promise<void> {
        await this.app.listen( this.app.get( 'PORT' ) );
        const result = await connectDB();
        console.log( `==========================================================================`.red );
        console.log( `NodeJS Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
        console.log( `MongoDB Server started on port: ${ result.connection.host }`.cyan );
        console.log( `==========================================================================`.red );
    }
}