const express  = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { ApiPaths } = require('./config/ApiPaths');
const artistRoutes = require('./routes/Artist.Routes');
const userRoutes= require('./routes/User.Routes');

class Server {
    PORT = process.env.PORT || 3600;
    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set( 'port', this.PORT );
        this.app.use( cors() );
    }

    middlewares () {
        this.app.use( json() );
        this.app.use( urlencoded( { extended: true } ) );
    }

    routes () {
        this.app.use( ApiPaths.artists, artistRoutes );
        this.app.use( ApiPaths.users, userRoutes );
    }

    async startServer () {
        await this.app.listen( this.app.get( 'port' ) );
        console.log( `Server started on port ${ this.app.get( 'port' ) }` );
    }
}

module.exports = {
    Server
};