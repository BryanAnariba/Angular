import 'colors';
import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.js';

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

    dbConnection () {

    }

    start () {
        this.app.listen( this.app.get('PORT'), () => {
            console.clear();
            console.log('==================================='.yellow);
            console.log( `NodeJS Server started on port: ${ this.app.get('PORT') }`.green );
            console.log('==================================='.yellow);
        });
    }
}

export { Server };