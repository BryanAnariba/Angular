require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );

const { endPoints } = require('./config/endPoints');
const { AuthRoutes } = require('./routes/auth.routes');
const { TaskRoutes } = require('./routes/task.routes');

class Server {
    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );
    }

    routes () {
        this.app.use( endPoints.auth, AuthRoutes );
        this.app.use( endPoints.tasks, TaskRoutes );
    }

    start () {
        this.app.listen( this.app.get( 'PORT' ), () => {
            console.log( `============================` );
            console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            
        });
    }
}

module.exports = {
    Server,
}