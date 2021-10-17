import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import GameRoutes from './routes/games.routes';
import IRoutes from './routes/index.routes';



class Server {
    protected app: Application;
    constructor () {
        this.app = express();
        this.config();
        this.routes();
    }

    config ():  void {
        this.app.set('port', process.env.PORT || 3500 );
        this.app.use( cors() );
        this.app.use( json() );
        this.app.use( urlencoded( { extended: true }) );
    }

    routes (): void {
        this.app.use( '/api/store', IRoutes );
        this.app.use( '/api/games', GameRoutes );  
    } 

    async start (): Promise<any> {
        await this.app.listen( this.app.get( 'port' ) );
        console.log(`Server started on port ${ this.app.get( 'port' ) }`);
    }
}

export default Server;
