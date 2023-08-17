import 'dotenv/config';
import 'colors';
import express from "express";
import cors from 'cors';
import indexRoutes from './routes/index';
import { connectDB } from './config/DBConnection';
import cookieParser from 'cookie-parser';

export class Server {

    public app: express.Application;

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();

    }

    settings (): void {
        this.app.set( 'PORT', process.env.PORT || 5000 );
    }

    middlewares (): void {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( cookieParser() );
    }

    routes (): void {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles (): void {

    }

    async startServer (): Promise<void> {
        try {
            await this.app.listen( this.app.get('PORT') );
            const conn = await connectDB();
            console.clear();
            console.log( `====================================================================`.cyan );
            console.log( `Node JS Server started: ${ this.app.get( 'PORT' ) }`.green );
            console.log( `Mongo DB started at port: ${ conn.connection.host }`.green );
            
            console.log( `====================================================================`.cyan );
        } catch ( error ) {
            throw new Error( `Error: ${ error }` );
        }
    }

}