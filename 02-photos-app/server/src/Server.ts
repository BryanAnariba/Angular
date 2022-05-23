import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, { Application } from 'express';
import 'colors';
import path from 'path';

import { endPoints } from './config/endPoints';
import { galleryRoutes } from './routes/photo.routes';

class Server {
    app: Application;
    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings = (): void => {
        this.app.set( 'port', process.env.PORT || 5000 );
    }

    middlewares = (): void => {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes (): void {
        this.app.use( endPoints.gallery, galleryRoutes );
    }

    staticFiles (): void {
        this.app.use( '/uploads', express.static( path.resolve( 'uploads' ) ) );
    }

    start = async (): Promise<any> => {
        try {
            console.clear();
            await this.app.listen( this.app.get( 'port' ) );
            console.log( `Server started on port ${ this.app.get( 'port' ) }`.cyan );
        } catch ( err ) {
            console.clear();
            throw new Error( `Start Server failed: ${ err }`.red );
        }
    }



}

export { Server };